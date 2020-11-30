import {Injectable } from '@nestjs/common'
import {Repository} from 'typeorm'
import {InjectRepository} from '@nestjs/typeorm'
import {Company} from '../../db/entities/company.entity'

@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(Company)
        private userRepository: Repository<Company>
    ) {
    }

    async findAll(params: any): Promise<any> {
        return await this.userRepository.createQueryBuilder('company')
            .where('company.deletedAt  is NULL')
            .skip(params.skip)
            .take(params.itemsPerPage)
            .orderBy('company.Name')
            .addOrderBy("company.service_Of_Activity")
            .addOrderBy("company.number_Of_Employees")
            .getMany()
    }

    async findOne(id): Promise<any> {
        return await this.userRepository.createQueryBuilder('company')
            .where("company.id = :id", {id: id})
            .getOne()
    }

    async create(company): Promise<any> {
        console.log('company: ', company)
        return await this.userRepository.save(company)
    }

    async delete(id): Promise<any> {
        const company = {
            deletedAt: new Date()
        };
        return await this.userRepository.update(id, company)
    }

    async update(id, company): Promise<any> {
        return await this.userRepository.update(id, {...company})
    }
}
