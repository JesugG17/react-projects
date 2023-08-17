import jwt from 'jsonwebtoken';
import env from 'env';

export const generateJWT = (id: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { id },
      env.SECRET_KEY,
      {
        expiresIn: '4h',
      },
      (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token as string);
        }
      }
    );
  });
};
