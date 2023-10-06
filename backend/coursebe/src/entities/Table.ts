// src/entities/Table.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Products } from './Products';
import { Order } from './Order';
import { OrderHistory } from './OrderHistory';

@Entity({ name: 'table' })
export class Table {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => Products, (product) => product.table, { nullable: true })
  productId: Products;

  @OneToMany(() => Order, (order) => order.tableId)
  order: Order[];

  @OneToMany(() => OrderHistory, (orderHistory) => orderHistory.tableId)
  orderHistory: OrderHistory[];
}
