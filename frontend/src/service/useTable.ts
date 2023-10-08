import { useEffect, useState } from "react";
import { ApiData } from "../hooks/api";
import { Itable } from "../interface/Itable";

export default function GetTables() {
    const [tableData, setTableData] =useState<Itable[]>([]); 
  
    // Fungsi untuk mengambil data dari API
    const fetchData = async () => {
      try {
          const response = await ApiData.get("/table");
          setTableData(response.data) 
      } catch (error) {
        console.error('Gagal mengambil data tabel:', error);
      }
    };
    useEffect(() => {
        fetchData();
      }, []);


    return {fetchData,tableData};
}
  
