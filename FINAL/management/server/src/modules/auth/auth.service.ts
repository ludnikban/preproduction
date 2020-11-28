import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

    async validateUser(email: string, pass: string): Promise<any> {
        // const user = await this.usersService.findByEmail(email);
        const user = await this.usersService.findCurrUser(email,pass);

        console.log(user)


        if (user && user.password === pass) {

            // const {  password,  ...result } = user;
            return {token: this.jwtService.sign({ email: user.email, sub: user.id }), user}
            // return result;
        }
        return null;
    }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}