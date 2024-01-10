import jwt, { Secret } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/user';

export function generateToken(user: User) {
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET as Secret, {
        expiresIn: 86400 // expires in 24 hours
    });
}

export async function verifyPassword(userPassword: string, receivedPassword: string) {
    return bcrypt.compare(receivedPassword, userPassword);
}