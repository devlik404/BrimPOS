// Payment.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Table } from './Table';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'double precision' })
  amount: number;

  @ManyToOne(() => Table, (table) => table.payments, { nullable: true })
  table: Table;
}
