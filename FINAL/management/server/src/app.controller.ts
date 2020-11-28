import {Body, Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import { AuthService } from './modules/auth/auth.service';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';
// import { LocalAuthGuard } from './modules/auth/guards/local-auth.guard';
import {User} from "./db/entities/user.entity";

@Controller()
export class AppController {
    constructor(private readonly authService: AuthService) {}

    // @Post('user/auth/login')
    // async login(@Body() body) {
    //     return this.authService.validateUser(body.email, body.password);
    // }

    @Post('user/auth/login')
    async login(@Body() body) {
        return this.authService.validateUser(body.email, body.password);
    }

    // @Post('user/auth/reg')
    // async register(@Body() body) {
    //     return this.authService.register(body.email, body.password);
    // }

    // @UseGuards(JwtAuthGuard)
    // @Get('user/profile')
    // getProfile(@Body() body) {
    //     return body;
    // }
}

