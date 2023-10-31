import { Request, Response } from "express";
import { CreateAuthorDto } from "../dto/create-author-dto";
import { AUTHORS } from "../mocks/author";
import { Author } from "../entities/author.entity";
import { HTTP_CODES } from "../utils/constants/http-codes";
import { RELATION } from "../mocks/many-to-many";
import { BOOKS } from '../mocks/books';

export class AuthorController {

    create(req: Request, res: Response) {
        const createBook = req.body as CreateAuthorDto;

        const authorIds = AUTHORS.map(author => author.id);
        const maxId = Math.max(...authorIds);

        const newAuthor: Author = {
            id: maxId + 1,
            ...createBook
        }

        AUTHORS.push(newAuthor);

        res.status(HTTP_CODES.CREATED).json({
            data: null,
            code: HTTP_CODES.CREATED,
            message: 'The author has been created successfully!'
        });
    }

    findAll(req: Request, res: Response) {

        const mapperAuthor: {[key: number]: string}[] = AUTHORS.map( author => ({
            [author.id]: author.name
        }));


        const mapperBook = BOOKS.map( book => ({
            [book.id]: book.title
        }));

        const data = RELATION.map( relation => {

            return {
                id: relation.authorId,
                author: mapperAuthor[relation.authorId],
                book: mapperBook[relation.bookId]    
            }
        })


        res.status(HTTP_CODES.OK).json({
            data,
            code: HTTP_CODES.OK,
            message: 'Books retrieved successfully!'
        });
    }
}