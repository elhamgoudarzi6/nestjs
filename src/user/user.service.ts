import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserDto } from './user.dto';
import { User } from './user.interface';


@Injectable()
export class UserService {
    constructor(@InjectModel('User') private Model: Model<User>) { }

    async getAllUsers(): Promise<User[]> {
        const data = await this.Model.find();
        if (!data || data.length == 0) {
            throw new NotFoundException('users data not found!');
        }
        return data;
    }

    async create(userDto: UserDto): Promise<User> {
        const data = new this.Model(userDto);
        return data.save();
    }

    async getUser(id: string): Promise<User> {
        const data = await this.Model.findById(id).exec();
        if (!data) {
            throw new NotFoundException(`Student #${id} not found`);
        }
        return data;
    }

    async updateUser(id: string, userDto: UserDto): Promise<User> {
        const data = await this.Model.findByIdAndUpdate(id, userDto, { new: true });
        if (!data) {
            throw new NotFoundException(`Student #${id} not found`);
        }
        return data;
    }

    async deleteUser(id: string): Promise<User> {
        const data = await this.Model.findByIdAndDelete(id);
        if (!data) {
            throw new NotFoundException(`Student #${id} not found`);
        }
        return data;
    }

}
