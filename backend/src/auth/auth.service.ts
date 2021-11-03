import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCrendentionalsDto } from './dto/auth-crendentionals.dto';
import { User } from './user.entity';
import { UserRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(authDto: AuthCrendentionalsDto): Promise<void> {
    return this.userRepository.createUser(authDto);
  }

  async signIn(
    authDto: AuthCrendentionalsDto,
  ): Promise<{ accessToken: string }> {
    const { email, password } = authDto;
    const user = await this.userRepository.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: JwtPayload = { email, role: user.role };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException(
        'Please chcek your sign in crendtional again',
      );
    }
  }
}
