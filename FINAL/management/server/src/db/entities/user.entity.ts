import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany, JoinColumn
} from 'typeorm'

import { Company } from './company.entity'

@Entity('users')
export class User {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  email: string

  @Column({ nullable: true })
  password: string

  @Column({ nullable: true })
  nick_Name: string

  @Column({ nullable: true })
  last_Name: string

  @Column({ nullable: true })
  first_Name: string

  @Column({ nullable: true })
  phone_Number: string

  @Column({ nullable: true })
  description: string

  @Column({ nullable: true })
  position: string

  @Column({ type: 'timestamp', nullable: true, name: 'deleted_at' })
  public deletedAt: Date

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date

  @OneToMany(
    type => Company,
    company => company.user,
  )
  @JoinColumn()
  company: Company
}
