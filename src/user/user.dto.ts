import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
export class UserDto {

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly mobile: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;

    @IsNumber()
    @IsNotEmpty()
    readonly age: number;

}