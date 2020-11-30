import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { UserService } from './user.service'
import { User } from '../../db/entities/user.entity'

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {
  }

  @Post(':auth/login')
  async findUser(@Body() body)
      : Promise<User> {
      return this.userService.findByEmail(body.user);
  }

  @Post(':auth/reg')
  async createUser(@Body() body)
      : Promise<any> {
      return this.userService.create(body.user);
  }

  @Get(':auth/reg')
  async findCurrUser(@Query('email') email: string,
                     @Query('password') password: string): Promise<any> {
      return this.userService.findUser(email, password);
  }

  @Get(':user/companies')
  async findOneWithCompanies(@Body() body): Promise<any> {
      return this.userService.findOneWithCompany(body.email);
  }

  @Get()
  async findAllWithCompany(@Query() params): Promise<User> {
      return this.userService.findAllWithCompany(params);
  }

  @Delete(':id')
  async delete(
    @Param() params,
  ): Promise<any> {
    return this.userService.delete(params.id);
  }

  @Put(':id')
  async update(
    @Param() params,
    @Body() body
  ): Promise<any> {
    return this.userService.update(params.id, {...body})
  }

  @Get(':auth/profile')
    async findOne(@Query('id') id: string): Promise<any> {
        return this.userService.findOne(id);
  }
}
