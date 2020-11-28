import {Injectable, UnauthorizedException} from '@nestjs/common'
import { UserService } from '../user/user.service'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findCurrUser(email,pass);

        if (user && user.password === pass) {
            return {token: this.jwtService.sign({ email: user.email, sub: user.id}), user}
        }else {
            throw new UnauthorizedException()
        }
        return null;
    }

    async registrUser(email: string ): Promise<any> {
        const user = await this.usersService.findByEmail(email)

        // console.log('user: ', user)

        if (!user) {
            const newUser = await this.usersService.create(user)
            return {token: this.jwtService.sign({ email: newUser.email, sub: newUser.id}), newUser}
        } else {
            // console.log('в БД уже есть user: ', user)
             // throw new UnauthorizedException()
        }
        return null;
    }

    async login(user: any) {
      const payload = { email: user.email, sub: user.id }
      return {
        token: this.jwtService.sign(payload),
      };
  }
}
