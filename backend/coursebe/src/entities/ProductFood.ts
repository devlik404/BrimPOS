// ProductFood.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Products } from './Products';

@Entity({name: 'product_food'})
export class ProductFood {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ type: 'float', nullable: true })
  price: number;

  @OneToMany(() => Products, (product) => product.foodId)
  products: Products[];
}