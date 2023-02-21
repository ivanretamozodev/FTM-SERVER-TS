import { NextFunction, Request, Response } from 'express';

const isAdmin = async ({ body }: Request, res: Response, next: NextFunction) => {
    try {
        if (body.user.role !== 'ADMIN_ROLE') {
            res.status(400).send('ONLY_ADMINS_CAN_REACH_THIS');
        }
    } catch (error) {
        res.send(error);
    }
    next();
};
export { isAdmin };
