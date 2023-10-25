import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Orders } from './Order';

@Entity({ name: 'tables' })
export class Tables {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  tableName: string;

  @OneToMany(() => Orders, (orders) => orders.table)
  orders: Orders[];
}