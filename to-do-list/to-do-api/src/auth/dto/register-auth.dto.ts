import { IsEmail, IsNotEmpty, IsString, MinLength, minLength } from "class-validator";

export class RegisterUserDto {
    @IsEmail()
    email: string;

    @IsString()
    username: string;

    @IsNotEmpty()
    @MinLength(8)
    password: string;

    @IsNotEmpty()
    @MinLength(8)
    secondPassword: string
}

export default RegisterUserDto