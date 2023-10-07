import "reflect-metadata"
import { DataSource } from "typeorm"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
<<<<<<< HEAD
    password: "123456789",
    database: "brimtech2",
=======
    password: "sjfrhsjd",
    database: "brimtechterbaik",
>>>>>>> 230ead74e0cdafad857d693935da5616cfb39ef6
    synchronize: true,
    logging: false,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migration/*.ts"],
    subscribers: [],
})
