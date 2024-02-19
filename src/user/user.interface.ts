import { Document } from 'mongoose';
export interface User extends Document{
    readonly name: string;
    readonly mobile: string;
    readonly age: number;
    readonly email: string;
}