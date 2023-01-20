import { Response } from 'express';

const handleHttp = (res: Response, error: string, errRaw?: any) => {
    console.log(errRaw);
    res.status(400).json({ success: false });
};

export { handleHttp };
