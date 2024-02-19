import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class UserDto {

    @IsString()
    @MaxLength(11)
    @MinLength(11)
    @IsNotEmpty()
    readonly mobile: string;

    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    readonly name: string;

    @IsNumber()
    readonly age: number;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
}