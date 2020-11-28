import { Injectable, HttpException } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../db/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

// поиск юзера по email, password с действующими компаниями

    async findCurrUser(email: string, password: string): Promise<any> {
        return await this.userRepository.createQueryBuilder('user')
            .where("user.email = :email and user.password = :password" ,
                { email: email , password: password })
            .andWhere('user.deletedAt  is NULL')
            .leftJoinAndSelect('user.company', 'company')
            .orderBy({
                "user.id": "ASC",
                "company.id": "DESC"})
            .getOne()
    }

// поиск всех юзеров с их фирмами

  async findAllWithCompany(params: any): Promise<any> {
    return await this.userRepository.createQueryBuilder('user')
      .where('user.deletedAt  is NULL')
      .skip(params.skip)
      .take(params.itemsPerPage)
      .leftJoinAndSelect('user.company', 'company')
      .orderBy({
        "user.id": "ASC",
        "company.id": "DESC"})
      .getMany()
  }

// поиск одного юзера по id с фирмами

  async findOneWithCompany(id): Promise<any> {
      return await this.userRepository.createQueryBuilder('user')
          .where("user.id = :id", { id: id })
          .leftJoinAndSelect('user.company', 'company')
          .where('company.deletedAt  is NULL')
          .getMany()
  }

// поиск юзера по email

  async findByEmail(email: string): Promise<User> {
      console.log('email: ', email)
      return await this.userRepository.createQueryBuilder('user')
          .where("user.email = :email" ,{ email: email })
          .andWhere('user.deletedAt  is NULL')
          .getOne()
  }

//поиск юзера по id

  async findOne(id): Promise<any> {
    return await this.userRepository.createQueryBuilder('user')
      .where("user.id = :id", { id: id })
      .getOne()
  }

// запись юзера в БД

  async create(user): Promise<any> {
      return await this.userRepository.save(user);
  }

// удаление юзера по id (корректировка поля deletedAt)

  async delete(id): Promise<any> {
      const user = {
        deletedAt: new Date(),
      };
      return await this.userRepository.update(id, user);
  }

// корректировка юзера

  async update(id, company): Promise<any> {
    return await this.userRepository.update(id, {...company})
  }
}
