import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { orders } from './Order';

@Entity({ name: 'payment_histories' })
export class payment_histories {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  status: string;

  @Column({ nullable: true })
  total: number;

  @ManyToOne(() => orders, (order) => order.payment_histories)
  orderId: orders;

  @Column({ nullable: true })
  date: Date;
}