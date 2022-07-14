import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Index()
  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 45 })
  password: string;

  @Column({ nullable: true, default: true })
  isActive: boolean;
}
