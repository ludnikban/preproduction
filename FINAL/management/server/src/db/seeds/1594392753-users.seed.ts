import {Factory, Seeder} from 'typeorm-seeding'
import {Connection} from 'typeorm'
import {User} from "../entities/user.entity"

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    try {
      await connection
        .createQueryBuilder()
        .insert()
        .into(User)
        .values([
          {
            id: 1,
            email: 'first@i.ua',
            password: 'first',
            nick_Name: "Иванов И.И.",
            last_Name: "Иванов",
            first_Name: "Иван",
            phone_Number: "111",
            description: "",
            position: 'user'
          },
            {
                id: 2,
                email: 'second@i.ua',
                password: 'second',
                nick_Name: "Петров П.П.",
                last_Name: "Петров",
                first_Name: "Петр",
                phone_Number: "222",
                description: "",
                position: 'user'
            },
            {
                id: 3,
                email: 'fird@i.ua',
                password: 'fird',
                nick_Name: "Михайлов М.М.",
                last_Name: "Михаилов",
                first_Name: "Михаил",
                phone_Number: "333",
                description: "",
                position: 'user'
            },
            {
                id: 4,
                email: 'super@i.ua',
                password: 'super',
                nick_Name: "Джексон Мю",
                last_Name: "Джексон",
                first_Name: "Майкл",
                phone_Number: "444",
                description: "",
                position: 'admin'
            },
            ])
        .execute()
    } catch (e) {
      console.warn(e)
    }
  }
}
