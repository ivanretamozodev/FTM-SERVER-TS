import { sign, verify } from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'Secret';

const generateToken = async (id: string, isAdmin: boolean) => {
    const jwt = sign({ id, isAdmin }, JWT_SECRET, {
        expiresIn: '1d',
    });
    console.log(jwt);
    return jwt;
};

export { generateToken };
