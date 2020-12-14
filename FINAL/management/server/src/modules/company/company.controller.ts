import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common'
import {CompanyService} from './company.service'
import {Company} from '../../db/entities/company.entity'

@Controller('company')
export class CompanyController {
    constructor(private companyService: CompanyService) {
    }

    @Get()
    async findAll(@Query() params): Promise<Company> {
        return this.companyService.findAll(params)
    }

    @Get(':id')
    async findOne(@Param() params): Promise<any> {
        return this.companyService.findOne(params.id)
    }

    @Post()
    async create(
        @Body() body
    ): Promise<any> {
        return await this.companyService.create(body.company)
    }

    @Delete(':id')
    async delete(
        @Param() params
    ): Promise<any> {
        return this.companyService.delete(params.id)
    }

    @Put(':id')
    async update(
        @Param() params,
        @Body() body
    ): Promise<any> {
        return this.companyService.update(params.id, {...body})
    }
}
