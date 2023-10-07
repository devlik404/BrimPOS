import { NextFunction, Request, Response } from "express";
import * as multer from "multer"


export const upload = (fieldName:string)=>{
    const storage = multer.diskStorage({
        destination: function(_req,_file,cb){
            cb(null,"./uploads/");
        },
        filename:function(_req,file,cb){
            const uniqueSuffix = Date.now();
            cb(null,file.fieldname + "_"+  uniqueSuffix +".png")
        },
    });
    const uploadFile = multer({storage:storage});

    return(req:Request,res:Response,next:NextFunction)=>{
        uploadFile.single(fieldName)(req,res,function(err:any){
            if(err){
                return res.status(400).json({error:"file upload failed."});
            }
            res.locals.filename = req.file.filename;
            next();
        });
    }

}