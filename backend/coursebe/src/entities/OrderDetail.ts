import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne
} from "typeorm";
import { Products } from "./Products";

import { Orders } from "./Order";

@Entity({ name: "order_detail" })
export class OrderDetail {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true })
  total: number;

  @Column({ nullable: true })
  status: string;


  @Column({ nullable: true })
  quantity: number;

 

@ManyToOne(() => Orders, (order) => order.OrderDetail)
order: Orders;

@ManyToOne(() => Products, (product) => product.OrderDetail)
product: Products;
}
