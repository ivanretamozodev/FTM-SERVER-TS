import { sign, verify } from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'PUT_YOUR_SECRET_KEY_HERE';

const generateToken = (id: string) => {
    const jwt = sign({ id }, JWT_SECRET, {
        expiresIn: '1d',
    });
    return jwt;
};

const verifyToken = (jwt: string) => {
    const isValid = verify(jwt, JWT_SECRET);
    return isValid;
};

export { generateToken, verifyToken };
