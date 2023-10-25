import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { OrderDetail } from "./OrderDetail";

@Entity({ name: "products" })
export class Products {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  price: number;

  @Column({ nullable: true })
  category: string;

  @Column({ nullable: true })
  image: string;

  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.product)
  OrderDetail: OrderDetail[];
}
