import 'module-alias/register';
import { Server } from './src/common/models/server';

const server = new Server();

server.listen();
