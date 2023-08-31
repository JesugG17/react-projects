import express, { Application } from 'express';
import helmet from 'helmet';
import env from 'env';
import { Paths } from '@core/types/interfaces/paths.interface';
import AuthRouter from '@modules/auth/auth.routes'
import { AppDataSource } from '@core/db/data-source';
export class Server {
  private app: Application;
  private port: number;
  private paths: Paths;

  constructor() {
    this.app = express();
    this.port = env.PORT ?? 8080;
    this.paths = {
      auth: '/api/auth'
    };

    this.middlewares();

    this.routes();

    this.initDatabase();
  }

  private async initDatabase() {
    try {
      await AppDataSource.initialize();
    } catch (error) {
      console.log('Cannot connect to database');
    }
  }

  private middlewares() {
    this.app.use(express.json());
    this.app.use(helmet());
  }

  private routes() {
    this.app.use(this.paths.auth, AuthRouter);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}
