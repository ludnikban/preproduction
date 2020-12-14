import { Module } from '@nestjs/common'
import {TypeOrmModule} from "@nestjs/typeorm"
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './modules/auth/auth.module'
import { UserModule } from './modules/user/user.module'
import { CompanyModule } from './modules/company/company.module'
import { User } from './db/entities/user.entity'
import { Company } from './db/entities/company.entity'

@Module({
  imports: [
    AuthModule,
    UserModule,
    CompanyModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Company]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: "127.0.0.1",
      port: 5432,
      database: "dev-backend",
      username: "postgres",
      password: "12345",
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: false,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
