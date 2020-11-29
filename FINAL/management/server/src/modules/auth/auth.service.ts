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
        const user = await this.usersService.findUser(email,pass);

        if (user && user.password === pass) {
            return {token: this.jwtService.sign({ email: user.email, sub: user.id}), user}
        }else {
            throw new UnauthorizedException()
        }
        return null;
    }

    async registrUser(body: any): Promise<any> {
        // console.log("registrUser",body)

        const newUser = await this.usersService.findByEmail(body.email)
        // console.log('auth.service findByEmail: ', newUser)

        if (!newUser) {
            // console.log('user: ', newUser)

            const user = await this.usersService.create(body)
            // console.log('created: ', user)

            return {token: this.jwtService.sign({ email: user.email, sub: user.id}), user}
        } else {

        // console.log('в БД уже есть user: ', newUser)
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
