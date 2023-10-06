import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Product } from "./Products";
import { Payment } from "./Payment";
import { OrderHistory } from "./OrderHistory";
import { Table } from "./Table";
import { Users } from "./Users"; // Import entitas User

@Entity({ name: "orders" })
export class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "timestamp", nullable: true })
  order_date: Date;

  @OneToMany(() => Product, (product) => product.order, { cascade: true })
  products: Product[];

  @OneToOne(() => Payment, (payment) => payment.order, { cascade: true })
  @JoinColumn()
  payment: Payment;

  @OneToMany(() => OrderHistory, (orderHistory) => orderHistory.order, {
    cascade: true,
  })
  orderHistory: OrderHistory[];

  @ManyToOne(() => Table, (table) => table.orders)
  table: Table;

  @ManyToOne(() => Users, (user) => user.orders) // Tambahkan relasi ke User
  user: Users;
}
