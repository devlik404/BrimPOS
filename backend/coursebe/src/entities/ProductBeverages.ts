import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Product } from "./Products";

@Entity({ name: "product_beverages" })
export class ProductBeverage {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ type: "double precision" })
  price: number;

  @Column({ type: "integer" })
  quantity: number;

  @Column({ type: "text" })
  image: string;

  @ManyToOne(() => Product, (product) => product.productBeverage)
  products: Product[];
}
