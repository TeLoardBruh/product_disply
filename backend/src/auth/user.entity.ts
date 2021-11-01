import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserRoles } from './user-roles.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  email: string;
  @Column({ unique: true })
  username: string;
  @Column()
  password: string;
  @Column({ default: 'CUSTOMER' })
  role: UserRoles;
}
