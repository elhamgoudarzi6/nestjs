import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserDto } from './user.dto';
import { IUser } from './user.interface';


@Injectable()
export class UserService {
    constructor(@InjectModel('User') private Model: Model<IUser>) { }

    async getAllUsers(): Promise<IUser[]> {
        const data = await this.Model.find();
        if (!data || data.length == 0) {
            throw new NotFoundException('users data not found!');
        }
        return data;
    }

    async create(userDto: UserDto): Promise<IUser> {
        const newStudent = new this.Model(userDto);
        return newStudent.save();
    }

    async getUser(id: string): Promise<IUser> {
        const data = await this.Model.findById(id).exec();
        if (!data) {
            throw new NotFoundException(`Student #${id} not found`);
        }
        return data;
    }

    async updateUser(id: string, userDto: UserDto): Promise<IUser> {
        const existingStudent = await this.Model.findByIdAndUpdate(id, userDto, { new: true });
        if (!existingStudent) {
            throw new NotFoundException(`Student #${id} not found`);
        }
        return existingStudent;
    }

    async deleteUser(id: string): Promise<IUser> {
        const data = await this.Model.findByIdAndDelete(id);
        if (!data) {
            throw new NotFoundException(`Student #${id} not found`);
        }
        return data;
    }

}
