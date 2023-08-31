import { DataSource } from "typeorm";
import env from 'env';

export const AppDataSource = new DataSource({
    type: 'mssql',
    host: 'localhost',
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE
})