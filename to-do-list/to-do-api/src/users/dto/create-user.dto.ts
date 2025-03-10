import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    username: string

    @IsString()
    password: string
}