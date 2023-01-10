import { hash, compare } from 'bcryptjs';

const enctrypt = async (pass: string) => {
    const passwordHash = await hash(pass, 10);
    return passwordHash;
};
const verifyPassword = (pass: string, passHash: string) => {
    const isEqual = compare(pass, passHash);
    return isEqual;
};

export { enctrypt, verifyPassword };
