import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Orders } from "./Order";

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

  @OneToMany(() => Orders, (order) => order.paymentHistory)
  orders: Orders[];
}
