// src/modules/auth.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secretKey = 'your-secret-key';

const loginUser = (req: Request, res: Response) => {
    const user = {
        id: 1,
        username: 'testuser',
    };
    const token = jwt.sign(user, secretKey);
    res.json({ token });
};

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(token, secretKey, (err: any, user: any) => {
        if (err) {
            return res.status(403).json({ error: 'Forbidden' });
        }
        // Assuming that you have custom typings for user in your application
        (req as CustomRequest).user = user;
        next();
    });
};

export { authenticateToken, loginUser };

// CustomRequest definition (add this if not already defined)
interface CustomRequest extends Request {
    user?: any;
}
