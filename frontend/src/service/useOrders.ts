import {  FormEvent, useState } from "react";
import { ApiData } from "../hooks/api";
import Iorder from "../interface/Iorder";


export default function usePostOrders() {
    const [setOrders,setOrdersData] = useState<Iorder>({
      total:0,
      tableId:""
    })

 
    // Fungsi untuk mengambil data dari API
    const submitHandler = async (e:FormEvent) =>{
        e.preventDefault()
        try {
          const data = await ApiData.post("/addorder",setOrders);
          console.log("data",data)
        } catch (error) {
          console.error('Gagal menambah data:', error);
        }
      };
      
  


    return {setOrdersData,submitHandler};
}
  
