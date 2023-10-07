import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, JoinColumn, OneToOne, OneToMany } from 'typeorm';
import { orders } from './Order';

@Entity({ name: 'payment_histories' })
export class payment_histories {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  status: string;

  @Column({ nullable: true })
  total: number;
  
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;
  
 
  @OneToMany(() => orders, (order) => order.paymentHistory)
  orders: orders[];
}