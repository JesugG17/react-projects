import express, { Application } from 'express';
import { Server, createServer } from 'http';
import { Server as SocketIO} from 'socket.io';
import cors from 'cors';

export class App {

    private app: Application;
    private server: Server;
    private io: SocketIO;
    private port: number;

    constructor() {
        this.app = express();
        this.port = 8080;
        this.middlewares();

        this.server = createServer(this.app);

        this.io = new SocketIO(this.server, {
            cors: {
                origin: '*'
            }
        });

        this.io.on('connection', (socket) => {
            console.log(`User connected id: ${socket.id}`);

            socket.on('disconnect', () => {
                console.log(`User disconnected id: ${socket.id}`);
            });
        });
    }

    private middlewares() {
        this.app.use(cors());
    }

    public listen() {
        this.server.listen(this.port, () => {
            console.log(`Server running on ${this.port} PORT`);
        });
    }

}