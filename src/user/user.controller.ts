import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('users')

export class UserController {
  constructor(private readonly service: UserService) { }

  @Get()
  async getUsers(@Res() response) {
    try {
      const data = await this.service.getAllUsers();
      return response.status(HttpStatus.OK).json({
        message: 'All users data found successfully', data,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Post()
  async create(@Res() response, @Body() userDto: UserDto) {
    try {
      const data = await this.service.create(userDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'User has been created successfully',
        data,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: User not created!',
        error: 'Bad Request'
      });
    }
  }

  @Put('/:id')
  async updateUser(@Res() response, @Param('id') studentId: string,
    @Body() userDto: UserDto) {
    try {
      const data = await this.service.updateUser(studentId, userDto);
      return response.status(HttpStatus.OK).json({
        message: 'User has been successfully updated', data
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:id')
  async getUser(@Res() response, @Param('id') id: string) {
    try {
      const data = await this.service.getUser(id);
      return response.status(HttpStatus.OK).json({
        message: 'User found successfully', data
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  async deleteUser(@Res() response, @Param('id') id: string) {
    try {
      const data = await this.service.deleteUser(id);
      return response.status(HttpStatus.OK).json({
        message: 'User deleted successfully', data
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

}
