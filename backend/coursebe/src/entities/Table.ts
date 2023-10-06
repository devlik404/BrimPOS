// Table.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Products } from './Products';
import { Order } from './Order';
import { OrderHistory } from './OrderHistory';
import { Payment } from './Payment';

@Entity({name: 'table'})
export class Table {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => Products, (products) => products.tables, { nullable: true })
  productId: Products;

  @OneToMany(() => Order, (order) => order.tableId)
  orders: Order[];

  @OneToMany(() => OrderHistory, (orderHistory) => orderHistory.tableId)
  orderHistory: OrderHistory[];

  @OneToMany(() => Payment, (payment) => payment.table, { nullable: true }) // Tambahkan relasi ke Payment
  payments: Payment[]
}