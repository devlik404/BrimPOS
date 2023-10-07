import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { orders } from "./Order";

@Entity({ name: "payment_histories" })
export class PaymentHistories {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true })
  status: string;

  @Column({ nullable: true })
  total: number;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  date: Date;

  @OneToMany(() => orders, (order) => order.paymentHistory)
  orders: orders[];
}
