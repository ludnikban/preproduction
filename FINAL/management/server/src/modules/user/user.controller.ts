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
//Регистрация юзера
    @Post(':auth/reg')
    async createUser(@Body() body)
        : Promise<any> {
        return this.userService.createUser(body.user);
    }

    @Get(':auth/reg')
    async findCurrUser(@Query('email') email: string,
                   @Query('password') password: string): Promise<any> {
        return this.userService.findCurrUser(email, password);
    }

    // @Get(':auth/login')
    // async findCurrUser1(@Query('email') email: string,
    //                    @Query('password') password: string): Promise<any> {
    //     return this.userService.findCurrUser(email, password);
    // }

    // @Post(':auth/reg')
    // async create(
    //     @Body() body,
    // ): Promise<any> {
    //     return await this.userService.create(body.user);
    // }

  @Get()
  async findAllWithCompany(@Query() params): Promise<User> {
    return this.userService.findAllWithCompany(params);
  }
  //
  //   // @Get(':auth/login')
  //   // // @Post(':auth/login')
  //   // async findCurUser(@Query('email') email: string,
  //   //                @Query('password') password: string): Promise<any> {
  //   //     return this.userService.findUser(email, password);
  //   // }
  //
  //
  //   @Post(':auth/login')
  //   async findOneUser(@Body() body, @Query('email') email: string,
  //                     @Query('password') password: string): Promise<any> {
  //       return this.userService.findUser(email, password);
  //   }
  //
  // @Get(':auth/reg')
  // async findUser(@Query('email') email: string,
  //                @Query('password') password: string): Promise<any> {
  //     return this.userService.findUser(email, password);
  // }
  //
  //   @Get(':auth/profile')
  //   async findUser1(@Query('email') email: string,
  //                  @Query('password') password: string): Promise<any> {
  //       return this.userService.findUser(email, password);
  //   }
  //
  //   @Get(':auth/login')
  //   async findUser2(@Query('email') email: string,
  //                  @Query('password') password: string): Promise<any> {
  //       return this.userService.findUser(email, password);
  //   }
  //
  // @Get(':company')
  // async findOneWithCompany(@Query('id') id: string): Promise<any> {
  //     return this.userService.findOneWithCompany(id);
  // }
//********************************************
  // @Get(':auth/profile')
  //   async findOne(@Query('id') id: string): Promise<any> {
  //       return this.userService.findOne(id);
  // }
  //
  //   @Get(':auth/profile2')
  //   async findAByEmail(@Query() params): Promise<User> {
  //       return this.userService.findByEmail(params);
  //   }

//**********************

    // @Post(':auth/reg')
    // async create(
    //     @Body() body,
    // ): Promise<any> {
    //     return await this.userService.create(body.user);
    // }

//   @Delete(':id')
//   async delete(
//     @Param() params,
//   ): Promise<any> {
//     return this.userService.delete(params.id);
//   }
//
//   @Put(':id')
//   async update(
//     @Param() params,
//     @Body() body
//   ): Promise<any> {
//     return this.userService.update(params.id, {...body})
//   }
}
