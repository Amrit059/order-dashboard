export class UserModel {
    _id: string;
    password?: string;
    fullName?: string;
    email?: string;
    role?: string;
    isActive?: Boolean;
    createdAt?: Date;
}
