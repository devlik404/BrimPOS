import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Products } from "./Products";
import { Tables } from "./Table";
import { PaymentHistories } from "./PaymentHistory";

@Entity({ name: "orders" })
export class orders {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true })
  total: number;

  @OneToMany(() => Products, (products) => products.orders)
  products: Products[];

  @ManyToOne(() => Tables, (table) => table.orders)
  table: Tables;

  @ManyToOne(() => PaymentHistories, (paymentHistory) => paymentHistory.orders)
  paymentHistory: PaymentHistories;
}
