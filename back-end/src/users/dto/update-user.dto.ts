import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  password: string; // Reescreve password pois no update não e uma propriedade obrigatória

  isActive: boolean;
}
