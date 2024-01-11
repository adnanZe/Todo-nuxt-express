import { NextFunction, Request, Response } from 'express';
import jwt, { Secret } from 'jsonwebtoken';

interface RequestWithUser extends Request {
    userId?: string;
}

const test = "test";

export const verifyToken = (req: RequestWithUser, res: Response, next: NextFunction) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(403).send({ message: 'No token provided' });
    }

    const tokenString = Array.isArray(token) ? token[0] : token;

    jwt.verify(tokenString, process.env.JWT_SECRET as Secret, (err, decoded) => {
        if (err) {
            return res.status(500).send({ message: 'Failed to authenticate token' });
        }
        req.userId = (decoded as { id: string }).id;
        next();
    });
};