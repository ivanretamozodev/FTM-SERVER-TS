import { Auth } from './auth.interface';

export interface User extends Auth {
    name: string;
    description: string;
    role: 'USER_ROLE' | 'ADMIN_ROLE';
}
