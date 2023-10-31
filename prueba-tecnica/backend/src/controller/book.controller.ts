import { Request, Response } from "express";
import { CreateBookDto } from "../dto/create-book-dto";
import { Book } from "../entities/book.entity";
import { BOOKS } from "../mocks/books";
import { HTTP_CODES } from "../utils/constants/http-codes";
import { AUTHORS } from '../mocks/author';
import { RELATION } from "../mocks/many-to-many";

export class BookController {

    create(req: Request, res: Response) {
        const createBook = req.body as CreateBookDto;

        const authorExists = AUTHORS.find( author => author.id === createBook.author);

        if (!authorExists) {
            return res.status(HTTP_CODES.BADREQUEST).json({
                data: null,
                code: HTTP_CODES.BADREQUEST,
                message: `The author id ${ createBook.author } doesnt exists`
            });
        }


        const booksIds = BOOKS.map(book => book.id);
        const maxId = Math.max(...booksIds);

        const newBook: Book = {
            id: maxId + 1,
            ...createBook
        }

        BOOKS.push(newBook);

        res.status(HTTP_CODES.CREATED).json({
            data: null,
            code: HTTP_CODES.CREATED,
            message: 'The book has been created successfully!'
        });

    }

    findAll(req: Request, res: Response) {

        const mapperAuthor = AUTHORS.map( author => ({
            [author.id]: author.name
        }));

        
        const mapperBook = BOOKS.map( book => ({
            [book.id]: {
                title: book.title,
                pages: book.pages,
                chapters: book.chapters
            }
        }));
        
        const data = RELATION.map( relation => {

            return {
                id: relation.authorId,
                book: mapperBook[relation.bookId],    
                author: mapperAuthor[relation.authorId],
            }
        });
        
        res.status(HTTP_CODES.OK).json({
            data,
            code: HTTP_CODES.OK,
            message: 'Books retrieved successfully!'
        });
    }

    getPagesPerChaper(req: Request, res: Response) {
        const bookid = req.params.id;

        const book = BOOKS.find(book => book.id === +bookid);

        if (!book) {
            return res.status(HTTP_CODES.BADREQUEST).json({
                data: null,
                code: HTTP_CODES.BADREQUEST,
                message: 'That book doesnt exists!'
            });
        }

        const pagesPerChapter = book.pages / book.chapters;

        res.status(HTTP_CODES.OK).json({
            data: {
                bookId: book.id.toString(),
                pagesPerChapter: pagesPerChapter.toString(),
            }
        })
    }
}