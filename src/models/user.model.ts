import { Schema, model } from 'mongoose';
import { User } from '../interfaces/user.interface';

const UserSchema = new Schema<User>(
    {
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
        },
        role: {
            type: String,
            enum: ['USER_ROLE', 'ADMIN_ROLE'],
            default: 'USER_ROLE',
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const userModel = model('User', UserSchema);

export default userModel;
