import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Order } from "./Order";

@Entity({ name: "users" })
export class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
