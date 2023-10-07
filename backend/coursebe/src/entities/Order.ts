import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn, Table, OneToMany } from 'typeorm';
import { Products } from './Products';
import { Tables} from './Table';
import { payment_histories } from './PaymentHistory';

@Entity({ name: 'orders' })
export class orders {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  total: number;

@OneToMany(() => Products, (products) => products.orders)
products: Products[];

@ManyToOne(() => Tables, (table) => table.orders)
table: Tables;

@ManyToOne(() => payment_histories, (paymentHistory) => paymentHistory.orders)
paymentHistory: payment_histories;

}