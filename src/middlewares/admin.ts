import { NextFunction, Request, Response } from 'express';

const isAdmin = async ({ body }: Request, res: Response, next: NextFunction) => {
    try {
        if (body.user.role !== 'ADMIN_ROLE') {
            res.status(400).send('ONLY_ADMINS_CAN_REACH_THIS');
        }
        next();
    } catch (error) {
        res.send(error);
    }
};
export { isAdmin };
