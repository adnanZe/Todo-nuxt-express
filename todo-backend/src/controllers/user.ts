import { generateToken, verifyPassword } from '../services/auth';
import { Request, Response } from 'express';
import { getUserByUsername } from '../services/user';

export async function login(req: Request, res: Response) {
    const user = getUserByUsername(req.body.username);
    if (!user) {
        return res.status(400).send({ message: 'The username does not exist' });
    }

    const isPasswordValid = await verifyPassword(user.password, req.body.password);
    if (!isPasswordValid) {
        return res.status(401).send({ token: null, message: 'The password is not valid' });
    }

    const token = generateToken(user);
    res.status(200).send({ token });
}