import express, { Application } from 'express';
import helmet from 'helmet';
import env from 'env';

export class Server {
  private app: Application;
  private port: number;

  constructor() {
    this.app = express();
    this.port = env.PORT ?? 8080;

    this.middlewares();

    this.routes();

    this.initDatabase();
  }

  private initDatabase() {}

  private middlewares() {
    this.app.use(express.json());
    this.app.use(helmet());
  }

  private routes() {}

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}
