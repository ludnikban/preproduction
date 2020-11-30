import {Injectable} from '@nestjs/common'
import {Repository} from 'typeorm'
import {InjectRepository} from '@nestjs/typeorm'
import {User} from '../../db/entities/user.entity'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {
    }

    async findByEmail(email: string): Promise<User> {
        return await this.userRepository.createQueryBuilder('user')
            .where("user.email = :email", {email: email})
            .andWhere('user.deletedAt  is NULL')
            .getOne()
    }

    async create(user): Promise<any> {
        return await this.userRepository.save(user);
    }

    async findUser(email: string, password: string): Promise<any> {
        return await this.userRepository.createQueryBuilder('user')
            .where("user.email = :email and user.password = :password",
                {email: email, password: password})
            .andWhere('user.deletedAt  is NULL')
            .leftJoinAndSelect('user.company', 'company')
            .orderBy({
                "user.id": "ASC",
                "company.id": "DESC"
            }).getOne()
    }

    async findOneWithCompany(email: string): Promise<any> {
        return await this.userRepository.createQueryBuilder('user')
            .where("user.email = :email",
                {email: email})
            .andWhere('user.deletedAt  is NULL')
            .leftJoinAndSelect('user.company', 'company')
            .orderBy({
                "user.id": "ASC",
                "company.id": "DESC"
            })
            .getOne()
    }

    async findAllWithCompany(params: any): Promise<any> {
        return await this.userRepository.createQueryBuilder('user')
            .where('user.deletedAt  is NULL')
            .skip(params.skip)
            .take(params.itemsPerPage)
            .leftJoinAndSelect('user.company', 'company')
            .orderBy({
                "user.id": "ASC",
                "company.id": "DESC"
            })
            .getMany()
    }

    async delete(id): Promise<any> {
        const user = {
            deletedAt: new Date(),
        };
        return await this.userRepository.update(id, user);
    }

    async update(id, company): Promise<any> {
        return await this.userRepository.update(id, {...company})
    }

    async findOne(id): Promise<any> {
        return await this.userRepository.createQueryBuilder('user')
            .where("user.id = :id", {id: id})
            .getOne()
    }
}

