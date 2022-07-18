import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';

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
  @IsOptional()
  photo: string;

  @MaxLength(20)
  @IsOptional()
  phone: string;

  @MaxLength(20)
  @IsOptional()
  cellphone: string;

  isActive: boolean;
}
