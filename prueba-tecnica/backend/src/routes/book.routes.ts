import { Router } from 'express';
import { BookController } from '../controller/book.controller';

const router = Router();

const booksController = new BookController();

router.post('/create', booksController.create);

router.get('/all', booksController.findAll);

router.get('/pages/:id', booksController.getPagesPerChaper);

export default router;