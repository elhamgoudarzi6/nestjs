import { Document } from 'mongoose';
export interface IUser extends Document{
    readonly name: string;
    readonly mobile: string;
    readonly age: number;
}