import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Product } from "./Products";

@Entity({ name: "product_foods" })
export class ProductFood {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({nullable:true})
  name: string;

  @Column({ type: "double precision" })
  price: number;
  
  @Column({ type: "integer" })
  quantity: number;

  @Column({ type: "text" })
  image: string;

  @ManyToOne(() => Product, (product) => product.productFood)
  products: Product[];

}
