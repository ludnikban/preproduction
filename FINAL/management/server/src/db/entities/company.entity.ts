import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne
} from 'typeorm'

import { User } from './user.entity'

@Entity('companies')
export class Company {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  name: string

  @Column({ nullable: true })
  address: string

  @Column({ nullable: true })
  service_Of_Activity: string

  @Column({ default: 0 })
  number_Of_Employees: number

  @Column({ nullable: true })
  description: string

  @Column({ nullable: true })
  type: string

  @Column({ default: 0 })
  userId: number

  @Column({ type: 'timestamp', nullable: true, name: 'deleted_at' })
  public deletedAt: Date

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date

  @ManyToOne(
    type => User,
    user => user.id
  )
  user: User
}
