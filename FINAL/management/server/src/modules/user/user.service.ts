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

// поиск юзера по email
    async findByEmail(email: string): Promise<User> {
        console.log('email: ', email)
        return await this.userRepository.createQueryBuilder('user')
            .where("user.email = :email" ,
                { email: email })
            .getOne()
    }

    async findByEmailWithCompany(email: string): Promise<User> {
        console.log('email: ', email)
        return await this.userRepository.createQueryBuilder('user')
            .where("user.email = :email" ,{ email: email })
            .andWhere('user.deletedAt  is NULL')
            .leftJoinAndSelect('user.company', 'company')
            .orderBy({
                "user.id": "ASC",
                "company.id": "DESC"})
            .getOne()
    }

// поиск юзера по email password с компаниями
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

    async createUser(user): Promise<any> {
        return await this.userRepository.findOne(user);

    }
    // async findByEmail(user): Promise<User> {
        // console.log('user: ', user)
        // return await this.userRepository.findOne(user);
    // }


  // GET на получение всех юзеров с фирмами
  async findAllWithCompany(params: any): Promise<any> {
    return await this.userRepository.createQueryBuilder('user')
      .where('user.deletedAt  is NULL')
      // .where(`user.email = '${params.email}'`)
      // .andWhere('user.deletedAt  is NULL')
      .skip(params.skip)
      .take(params.itemsPerPage)
      .leftJoinAndSelect('user.company', 'company')
      .orderBy({
        "user.id": "ASC",
        "company.id": "DESC"})
      .getMany()
  }



// на получение одного юзера с фирмами
  async findOneWithCompany(id): Promise<any> {
      return await this.userRepository.createQueryBuilder('user')
          .where("user.id = :id", { id: id })
          .leftJoinAndSelect('user.company', 'company')
          .getMany()
  }

  async create(user): Promise<any> {
    console.log('user: ', user)
      return await this.userRepository.save(user);
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
}

//GET на получение юзера по id
//   async findOne(id): Promise<any> {
//     return await this.userRepository.createQueryBuilder('user')
//       .where("user.id = :id", { id: id })
//       .getOne()
//   }
//GET на получение юзера по email
//     async findByEmail(params:  any): Promise<any> {
//         return await this.userRepository.createQueryBuilder('user')
//             // .where('user.deletedAt  is NULL')
//             .andWhere(`user.email = '${params.email}'`)
//             .getOne()
//     }
//


// async findUser(email: string, password: string): Promise<any> {
//     return await this.userRepository.find(email, password);
// }

