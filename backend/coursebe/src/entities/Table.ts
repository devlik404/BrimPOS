import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Order } from "./Order";

@Entity({ name: "tables" })
export class Table {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  description: string;

  @OneToMany(() => Order, (order) => order.table)
  orders: Order[];
}
