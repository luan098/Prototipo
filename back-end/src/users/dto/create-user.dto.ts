import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @MinLength(3)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(255)
  email: string;

  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(45)
  password: string;

  @MaxLength(20)
  photo: string;

  @MaxLength(20)
  phone: string;

  @MaxLength(20)
  cellphone: string;

  isActive: boolean;
}
