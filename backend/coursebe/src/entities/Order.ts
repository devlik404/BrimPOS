// Order.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Table } from './Table';

@Entity({name: 'order'})
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp', nullable: true })
  order_date: Date;

  @ManyToOne(() => Table, (table) => table.orders, { nullable: true })
  tableId: Table;
}