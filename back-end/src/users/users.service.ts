import { User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async insert(createUserDto: CreateUserDto): Promise<User | null> {
    const finalUser = { ...createUserDto };
    const password = await hash(finalUser.password, 10);

    const entity = plainToInstance(User, finalUser);

    entity.password = password;
    return this.usersRepository.save(entity);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOneByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ email });
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateResult> {
    const finalUser = { ...updateUserDto };

    if (finalUser?.password) {
      finalUser.password = await hash(finalUser.password, 10);
    }

    return this.usersRepository.update(id, finalUser);
  }

  remove(id: string): Promise<DeleteResult> {
    return this.usersRepository.delete(id);
  }
}
