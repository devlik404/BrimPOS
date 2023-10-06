import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { products } from './Products';
import { tables } from './Table';
import { payment_histories } from './PaymentHistory';

@Entity({ name: 'orders' })
export class orders {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  total: number;

  @ManyToOne(() => products, (product) => product.orders)
  productId: products;

  @ManyToOne(() => tables, (table) => table.orderId)
  tableId: tables;

  @OneToMany(() => payment_histories, (payment_history) => payment_history.orderId)
  payment_histories: payment_histories[];
}