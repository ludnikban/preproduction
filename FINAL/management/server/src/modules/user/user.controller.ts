import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../../db/entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {
  }
//Аутентификация юзера
    @Post(':auth/login')
    async findUser(@Body() body)
        : Promise<User> {
        return this.userService.findByEmail(body.user);
    }
//запись юзера в БД - Регистрация юзера
    @Post(':auth/reg')
    async createUser(@Body() body)
        : Promise<any> {
        return this.userService.create(body.user);
    }

// поиск юзера по email, password

    @Get(':auth/reg')
    async findCurrUser(@Query('email') email: string,
                       @Query('password') password: string): Promise<any> {
        return this.userService.findUser(email, password);
    }

    // поиск юзера по email

    @Get(':user/companies')
    async findOneWithCompanies(@Body() body): Promise<any> {
        return this.userService.findOneWithCompany(body.email);
    }


// поиск всех юзеров с их фирмами

    @Get()
    async findAllWithCompany(@Query() params): Promise<User> {
        return this.userService.findAllWithCompany(params);
    }

//удаление юзера по id (корректировка поля deletedAt)

  @Delete(':id')
  async delete(
    @Param() params,
  ): Promise<any> {
    return this.userService.delete(params.id);
  }

// корректировка юзера

  @Put(':id')
  async update(
    @Param() params,
    @Body() body
  ): Promise<any> {
    return this.userService.update(params.id, {...body})
  }

//поиск юзера по id

  @Get(':auth/profile')
    async findOne(@Query('id') id: string): Promise<any> {
        return this.userService.findOne(id);
  }
}
