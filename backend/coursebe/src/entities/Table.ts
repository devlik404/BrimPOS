import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { orders } from './Order';

@Entity({ name: 'tables' })
export class tables {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  tableName: string;

  @ManyToOne(() => orders, (order) => order.tableId)
  orderId: orders;
}