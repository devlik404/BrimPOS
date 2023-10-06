// Products.ts

import { Entity, PrimaryGeneratedColumn, OneToOne, OneToMany } from 'typeorm';
import { ProductFood } from './ProductFood';
import { ProductBeverage } from './ProductBeverages';
import { Table } from './Table';

@Entity({name: 'product'})
export class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => ProductFood, (productFood) => productFood.products, { nullable: true })
  foodId: ProductFood;

  @OneToOne(() => ProductBeverage, (productBeverage) => productBeverage.products, { nullable: true })
  beverageId: ProductBeverage;

  @OneToMany(() => Table, (table) => table.productId)
  table: Table[];


  // ...
}
