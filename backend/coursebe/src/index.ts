import * as express from "express";
import {Request,Response} from "express";
import { AppDataSource } from "./data-source"
import root from './route'
// import * as cors from "cors";
// app.use(cors())
AppDataSource.initialize().then(async () => {
    
    const app = express();
    const port = 4000;
    
    app.use(express.json());
    app.use("/api/v1",root);

    app.get("/",(req:Request,res:Response) => {
        res.send("hello world");
    });
    app.listen(port,()=>{
        console.log(`server is running on localhost:${port}`)
    })


}).catch(error => console.log(error))
