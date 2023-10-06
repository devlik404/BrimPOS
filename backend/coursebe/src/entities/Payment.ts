import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Order } from "./Order";

@Entity({ name: "payments" })
export class Payment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "double precision" })
  amount: number;

  @OneToOne(() => Order, (order) => order.payment)
  @JoinColumn()
  order: Order;
}
