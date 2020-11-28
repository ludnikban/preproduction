import {Factory, Seeder} from 'typeorm-seeding'
import {Connection} from 'typeorm'
import {User} from "../entities/user.entity";

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    try {
      await connection
        .createQueryBuilder()
        .insert()
        .into(User)
        .values([
          {
            email: 'ludnik@ukr.net',
            password: 'secret',
            nick_Name: "Ludnik",
            phone_Number: 100,
            position: 'admin'
          },
        ])
        .execute()
    } catch (e) {
      console.warn(e)
    }
  }
}
