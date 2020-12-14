import {Body, Controller, Get, Post, Query, Request, UseGuards} from '@nestjs/common'
import {AuthService} from './modules/auth/auth.service'
import {UserService} from './modules/user/user.service'


@Controller()
export class AppController {
    constructor(private readonly authService: AuthService,
                private readonly userService: UserService) {
    }

    @Post('user/auth/login')
    async login(@Body() body) {

        return this.authService.validateUser(body.email, body.password)
    }

    @Post('user/auth/reg')
    async register(@Body() body) {

        return this.authService.registrUser(body);
    }

    @Get('user/profile')
    getProfile(@Body() body) {
        return body;
    }

    @Get(':user/companies')
    async getCompanies(@Query('email') email: string): Promise<any> {

        return this.userService.findOneWithCompany(email)
    }
}

