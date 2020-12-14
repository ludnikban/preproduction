import {Factory, Seeder} from 'typeorm-seeding'
import {Connection} from 'typeorm'
import {Company} from "../entities/company.entity"

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    try {
      await connection
        .createQueryBuilder()
        .insert()
        .into(Company)
        .values([
          {
            name: "Фирма 1 юзера Иванов И.И.",
            address: "г. Харьков, ул. Сумская 1",
            type: "ТОВ",
            description: "ииииииииииииииии",
            number_Of_Employees: 120,
            service_Of_Activity: "оооооооооооо",
            userId: 1,
          },
            {
                name: "Фирма 2 юзера Иванов И.И.",
                address: "г. Харьков, ул. Веснина 14",
                type: "ПП",
                description: "уууууууууууууууу",
                number_Of_Employees: 350,
                service_Of_Activity: "вввввввввввв",
                userId: 1,
            },
            {
                name: "Фирма 3 юзера Иванов И.И.",
                address: "г. Харьков, ул. Пушкинская 25",
                type: "АТ",
                description: "аааааааааааааааа",
                number_Of_Employees: 20,
                service_Of_Activity: "вввввввввввв",
                userId: 1,
            },
            {
                name: "Фирма 1 юзера Петров П.П.",
                address: "г. Харьков, ул. Сумская 130",
                type: "ПП",
                description: "яяяяяяяяяяяяяяяя",
                number_Of_Employees: 160,
                service_Of_Activity: "ммммммммм",
                userId: 2,
            },
            {
                name: "Фирма 2 юзера Петров П.П.",
                address: "г. Харьков, ул. Клочковская 34",
                type: "ТОВ",
                description: "ллллллллллллллля",
                number_Of_Employees: 60,
                service_Of_Activity: "ккккккккм",
                userId: 2,
            },
            {
                name: "Фирма 1 юзера Михайлов М.М.",
                address: "г. Харьков, ул. Мироносицкая 17",
                type: "АТ",
                description: "кккккккккккккккк",
                number_Of_Employees: 260,
                service_Of_Activity: "ццццццццм",
                userId: 3,
            },
            ])
        .execute()
    } catch (e) {
      console.warn(e)
    }
  }
}
