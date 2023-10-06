import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Order } from "./Order";
import { ProductFood } from "./ProductFood";
import { ProductBeverage } from "./ProductBeverages";

@Entity({ name: "products" })
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ type: "double precision" })
  price: number;

  @Column({ type: "integer" })
  quantity: number;

  @ManyToOne(() => Order, (order) => order.products)
  order: Order;

  @ManyToOne(() => ProductFood, (productFood) => productFood.products, {
    nullable: true,
  })
  productFood: ProductFood;

  @ManyToOne(
    () => ProductBeverage,
    (productBeverage) => productBeverage.products,
    { nullable: true }
  )
  productBeverage: ProductBeverage;
}
