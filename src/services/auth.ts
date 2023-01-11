import { Auth } from '../interfaces/auth.interface';
import { User } from '../interfaces/user.interface';
import userModel from '../models/user.model';
import { generateToken } from '../utils/jwtHandler';
import { enctrypt, verifyPassword } from '../utils/passwordHandler';

const registerNewUser = async ({ email, password, name }: User) => {
    const userExist = await userModel.findOne({ email });
    if (userExist) return 'USER_ALREADY_EXIST';
    const passwordHash = await enctrypt(password);
    const user = new userModel({ email, password: passwordHash, name });
    await user.save();
    return user;
};
const loginNewUser = async ({ email, password }: Auth) => {
    const userExist = await userModel.findOne({ email });
    if (!userExist) return 'USER_NOT_FOUND';
    const passwordHash = userExist.password;
    const isValid = await verifyPassword(password, passwordHash);
    if (!isValid) return 'WRONG_PASSWORD';

    const token = generateToken(userExist.id, userExist.isAdmin);

    return token;
};

export { registerNewUser, loginNewUser };
