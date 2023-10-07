import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { orders } from './Order';

@Entity({ name: 'tables' })
export class Tables {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  tableName: string;

  @OneToMany(() => orders, (orders) => orders.table)
  orders: orders[];
}