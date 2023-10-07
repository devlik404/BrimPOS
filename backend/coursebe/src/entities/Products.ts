import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { orders } from './Order';

@Entity({ name: 'products' })
export class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  price: number;

  @Column({ nullable: true })
  category: string;

  @Column({ nullable: true })
  image: string;
 
  @ManyToOne(() => orders, (order) => order.products)
  orders: orders;
}