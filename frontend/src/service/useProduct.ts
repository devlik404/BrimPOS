import { useEffect, useState } from "react";
import { ApiData } from "../hooks/api";
import { Iproduct } from "../interface/Iproduct";

export default function GetProduct() {
    const [productData, setProductData] = useState<Iproduct[]>([]); 
  
    // Fungsi untuk mengambil data dari API
    const fetchData = async () => {
        try {
          const response = await ApiData.get("/product");
          if (response.data.length > 0) {
            setProductData(response.data);
          }
        } catch (error) {
          console.error('Gagal mengambil data tabel:', error);
        }
      };
      
    useEffect(() => {
        fetchData();
      }, []);


    return {productData,setProductData};
}
  
