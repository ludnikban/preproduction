import {Body, Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import { AuthService } from './modules/auth/auth.service';

@Controller()
export class AppController {
    constructor(private readonly authService: AuthService) {}

    @Post('user/auth/login')
    async login(@Body() body) {

        console.log(body)

        return this.authService.validateUser(body.email, body.password);
    }

    @Post('user/auth/reg')
    async register(@Body() body) {
        return this.authService.registrUser(body.email );
    }

    @Get('user/profile')
    getProfile(@Body() body) {
        return body;
    }
}

