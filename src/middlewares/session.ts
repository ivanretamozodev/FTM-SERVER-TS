import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../utils/jwtHandler';

const checkSession = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        const isUser = verifyToken(`${jwt}`);

        if (!isUser) {
            return res.status(401).send('INVALID_JWT');
        } else {
            next();
        }
    } catch (e) {
        return res.status(400).send('INVALID_SESSION');
    }
};

export { checkSession };
