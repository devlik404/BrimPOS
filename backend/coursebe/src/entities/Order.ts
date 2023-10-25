import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Tables } from "./Table";
import { PaymentHistories } from "./PaymentHistory";
import { OrderDetail } from "./OrderDetail";

@Entity({ name: "orders" })
export class Orders {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true })
  total: number;

  @Column({ nullable: true })
  status: string;

 
@OneToMany(() => OrderDetail, (orders) => orders.order)
OrderDetail: OrderDetail[];


  @ManyToOne(() => Tables, (table) => table.orders)
  table: Tables;

  @ManyToOne(() => PaymentHistories, (paymentHistory) => paymentHistory.orders)
  paymentHistory: PaymentHistories;
}
