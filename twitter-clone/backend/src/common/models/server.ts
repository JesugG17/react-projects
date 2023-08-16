import express, { Application } from 'express';
import { Paths } from '../types/interfaces/paths.interface';
import AuthRouter from '../../modules/auth/auth.routes';
import { connectDB } from '../db/config';

export class Server {
  private app: Application;
  private port: number;
  private paths: Paths;

  constructor() {
    this.app = express();
    this.port = 8080;
    this.paths = {
      auth: '/api/auth',
    };

    this.middlewares();

    this.initDB();

    this.routes();
  }

  private async initDB() {
    await connectDB();
  }

  private middlewares() {
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }

  private routes() {
    this.app.use(this.paths.auth, AuthRouter);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`application running on port ${this.port}`);
    });
  }
}
