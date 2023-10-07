import { useState, FormEvent } from "react";
// import { ApiData } from "../hooks/api";
import axios from "axios";

interface Product {
    name: string;
    price: number; // Mengubah tipe data 'price' menjadi 'number'
    category: string;
    image: MediaSource |Blob |null;
  }

export function usePost() {
 
  const [content, setContent] = useState<Product>({
    name:"",
    price: 0,
    category:"",
    image: null
  });
 
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
       content.name?formData.append("name", content.name as string):"";
    
       content.price? formData.append("price", content.price.toString()): "";
     
       content.category?formData.append("category", content.category as string):"";

      
      content.image ?formData.append("image", content.image as File):null;

   

      const response = await axios.post("http://localhost:4000/api/v1/addproduct", formData);
    
 
      console.log("response data", response);

      // Refresh data or perform other actions as needed
    } catch (error) {
      console.log("error submitting data", error);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent((prevContent) => ({
      ...prevContent,
      name: e.target.value,
    }));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent((prevContent) => ({
      ...prevContent,
      price: parseFloat(e.target.value),
    }));
  };
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setContent((prevContent) => ({
      ...prevContent,
      category: e.target.value,
    }));
  };
  

  const handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setContent((prevContent) => ({
        ...prevContent,
        image: file,
      }));
    }
  };

 

  return {
    submitHandler,
    handleNameChange,
    handlePriceChange,
    handleCategoryChange,
    handlePictureChange,
    content,
  };
}
