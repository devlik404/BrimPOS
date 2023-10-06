// src/entities/OrderHistory.ts

import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Table } from './Table';

@Entity({name: 'order_history'})
export class OrderHistory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Table, (table) => table.orderHistory, { nullable: true })
  tableId: Table;
}
