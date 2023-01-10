import { Request, response, Response } from 'express';
import { loginNewUser, registerNewUser } from '../services/auth';
import { handleHttp } from '../utils/errorHandler';

const registerCtrl = async ({ body }: Request, res: Response) => {
    try {
        const responseUser = await registerNewUser(body);
        res.status(200).json(responseUser);
    } catch (e) {
        handleHttp(res, 'ERROR_REGISTER_USER');
    }
};
const loginCtrl = async ({ body }: Request, res: Response) => {
    try {
        const { email, password } = body;
        const responseLogin = await loginNewUser({ email, password });
        if (responseLogin === 'WRONG_PASSWORD') {
            res.status(404).json(responseLogin);
        } else {
            res.status(200).json(responseLogin);
        }
    } catch (e) {
        handleHttp(res, 'ERROR_LOGIN_USER');
    }
};

export { registerCtrl, loginCtrl };
