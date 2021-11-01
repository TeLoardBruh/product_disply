import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCrendentionalsDto } from './dto/auth-crendentionals.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signUp')
  signUp(@Body() authDto: AuthCrendentionalsDto): Promise<void> {
    return this.authService.signUp(authDto);
  }
  @Post('/signIn')
  signIn(
    @Body() authDto: AuthCrendentionalsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authDto);
  }
}
