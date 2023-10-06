import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name:"mhs"})
export class Mahasiswa {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string
    
    @Column()
    nim: string

    @Column()
    email: string

    @Column()
    prodi: string

    @Column()
    jurusan: string

}
