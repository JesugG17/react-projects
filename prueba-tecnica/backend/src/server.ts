import express, { Application } from 'express';
import helmet from 'helmet';
import { Paths } from './utils/paths.interface';
import AuthorRouter from './routes/author.routes';
import BookRouter from './routes/book.routes';

export class Server {
  private app: Application;
  private port: number;
  private paths: Paths;

  constructor() {
    this.app = express();
    this.port = 4001;
    this.paths = {
      book: '/api/book',
      author: '/api/author'
    }

    this.middlewares();

    this.routes();

    this.initDatabase();
  }

  private initDatabase() {}

  private middlewares() {
    this.app.use(express.json());
    this.app.use(helmet());
  }

  private routes() {
    this.app.use(this.paths.book, BookRouter);
    this.app.use(this.paths.author, AuthorRouter);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}
