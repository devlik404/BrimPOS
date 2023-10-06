// Products.ts
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, Column } from 'typeorm';
import { ProductFood } from './ProductFood';
import { ProductBeverage } from './ProductBeverages';
import { Table } from './Table';

@Entity({name: 'products'})
export class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => ProductFood, (productFood) => productFood.products, { nullable: true })
  @JoinColumn()
  foodId: ProductFood;

  @OneToOne(() => ProductBeverage, (productBeverage) => productBeverage.products, { nullable: true })
  @JoinColumn()
  beverageId: ProductBeverage;

  @OneToMany(() => Table, (table) => table.productId)
  tables: Table[];

  @Column({ type: 'integer', nullable: true })
  quantity: number;
}