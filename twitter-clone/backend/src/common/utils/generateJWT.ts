import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongoose';
import env from '../../../config';

export const generateJWT = (id: ObjectId) => {
    return new Promise((resolve, reject) => {
        jwt.sign({ id }, env.SECRET_KEY,  {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    
    });
}
