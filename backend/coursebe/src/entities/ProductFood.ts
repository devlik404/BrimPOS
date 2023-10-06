import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Product } from "./Products";

@Entity({ name: "product_foods" })
export class ProductFood {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ type: "double precision" })
  price: number;

  @ManyToOne(() => Product, (product) => product.productFood)
  products: Product[];
}
