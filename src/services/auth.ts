import { Auth } from '../interfaces/auth.interface';
import { User } from '../interfaces/user.interface';
import userModel from '../models/user.model';
import { generateToken } from '../utils/jwtHandler';
import { enctrypt, verifyPassword } from '../utils/passwordHandler';

const registerNewUser = async ({ email, password, name }: User) => {
    //comprobamos que el usuario no exista
    const userExist = await userModel.findOne({ email });
    //si el email ya esta registrado le mandamos una alerta
    if (userExist) return 'USER_ALREADY_EXIST';
    //en el caso de que no este registrado,encriptamos su password
    const passwordHash = await enctrypt(password);
    const user = new userModel({ email, password: passwordHash, name });
    //procedemos a guardar sus credenciales
    await user.save();
    return user;
};
const loginNewUser = async ({ email, password }: Auth) => {
    //comprobamos si el usuario existe
    const userExist = await userModel.findOne({ email });
    //si el usuario no existe le retornamos un error
    if (!userExist) return 'USER_NOT_FOUND';
    //comprobamos el hash del password
    const passwordHash = userExist.password;
    const isValid = await verifyPassword(password, passwordHash);
    //si no es valido le retornamos un error
    if (!isValid) return 'WRONG_PASSWORD';
    //le entregamos un nuevo jwt
    const token = generateToken(userExist.id, userExist.role);

    return token;
};

export { registerNewUser, loginNewUser };
