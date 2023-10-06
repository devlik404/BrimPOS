import { AppDataSource } from "../data-source";
import { Users } from "../entities/Users";
import { Request, Response } from "express";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt'
import * as jwt from "jsonwebtoken"
import { secretKey } from "../middleware/authenticate";

class ValidationService {
    private readonly validationRepository: Repository<Users> = AppDataSource.getRepository(Users);

    async create(req:Request,res:Response){
        try {
            const data = req.body;
            const hash = await bcrypt.hash(data.password, 10)
            const validation = this.validationRepository.create({
                username:data.fullname,
                email:data.email,
                password:hash
            });
            
          this.validationRepository.save(validation);
               return res.status(200).json("data berhasil di tambahkan");
        } catch (error) {
            return res.status(500).json("terjadi kesalahan");
        }

    }


    async login(req:Request,res:Response){
    try {
        const data = req.body;
        const validation = await this.validationRepository.findOne({
         where:{
            email:data.email
         },
         select:["id","username","email","password"]
        })
        if (!validation) {
            return res.status(401).json("User not found");
        }
        const compareHash =  bcrypt.compare(data.password,validation.password)
        console.log(compareHash)
        if (!compareHash) {
            return res.status(401).json("Invalid password");
        }
        const user = ({
            id:validation.id,
            username:validation.username,
            email:validation.email,

        })
        const token = jwt.sign({user}, secretKey, { expiresIn: '1h' });
        return res.status(200).json({
            user:user,
            token
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json("An error occurred");
    }
       
     }

     async check(req:Request,res:Response){
        try {
            const loginSession = res.locals.loginSession
            const user = await this.validationRepository.findOne ({
                where:{
                    id:loginSession.id
                },
                select:["id","username","email","password"]
            })
        
               return res.status(200).json({
                user,
                message:"token valid"
               });
        } catch (error) {
            return res.status(500).json("terjadi kesalahan validasi");
        }

    }
}
export default new ValidationService;