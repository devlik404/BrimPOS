import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Order } from "./Order";

@Entity({ name: "order_histories" })
export class OrderHistory {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "timestamp" })
  timestamp: Date;

  @Column()
  action: string;

  @ManyToOne(() => Order, (order) => order.orderHistory)
  order: Order;
}
