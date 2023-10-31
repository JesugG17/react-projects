import { Router } from 'express';
import { AuthorController } from '../controller/author.controller';

const router = Router();

const authorController = new AuthorController();

router.post('/create', authorController.create);

router.get('/all', authorController.findAll);

export default router;

