import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { AuthCrendentionalsDto } from './dto/auth-crendentionals.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(authDto: AuthCrendentionalsDto): Promise<void> {
    const { email, password, username, role } = authDto;
    // hashing the password
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    const user = this.create({
      email,
      password: hashPassword,
      username,
      role,
    });

    try {
      await this.save(user);
    } catch (error) {
      if (error.code == 23505) {
        throw new ConflictException('Username or Email is exist');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
