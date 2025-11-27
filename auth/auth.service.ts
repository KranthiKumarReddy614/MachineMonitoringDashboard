import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwt: JwtService) {}

  login(email: string, password: string) {
    if (email !== 'admin@example.com' || password !== 'password123') {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = this.jwt.sign({ email });

    return { access_token: token };
  }
}
