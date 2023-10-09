/* eslint-disable react-hooks/exhaustive-deps */

import { Route, Routes } from 'react-router-dom'
import Dashboard from './page/Dashboard'
import Product from './page/Product'
import UserPage from './features/users/users'
import Operational from './page/Oprational'
import Register from './page/Register'
import Login from './page/Login'
// import { useState, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { RootState } from './types/types/rootState'
// import { setAuthToken, ApiData } from './hooks/api'
// import { AUTH_CHECK, AUTH_ERROR } from './types/rootReducer'
import ProductId from './Component/productComponen/ProductId'

// import ProductId from './Component/productComponen/ProductId'

function App() {
//   const [isLoading,setIsoLoading]= useState<boolean>(true)
//   const auth = useSelector((state:RootState)=>state.auth)
//   const navigate=useNavigate()
//   const dispatch =useDispatch()
 
//    async function authCheck(){
//      try {
//        setAuthToken(localStorage.token)
//        const response = await ApiData.get('/check')
//        dispatch(AUTH_CHECK(response.data.user))
//        setIsoLoading(false)
       
//      } catch (error) {
//        dispatch(AUTH_ERROR())
//        setIsoLoading(false)
//        navigate("/login")
//      }
//    }
//  useEffect(()=>{
//  if(localStorage.token){
//    authCheck()
  
//  }else{
//    setIsoLoading(false)
//    navigate("/login")
//  }
   
//  },[])
 
//  function RouteLogin(){
//    if(!auth.username){
//      return <Navigate to={"/login"}/>
//    }else{
//      return <Outlet/>
//    }
//  }
 
//  function RouteNotLogin(){
//    if(auth.username){
//      return <Navigate to={"/"}/>
//    }else{
//      return <Outlet/>
//    }
//  }
  return (
    <>

     
    <Routes>
     
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/updateproduct/:id" element={<ProductId />} />
        <Route path="/payment" element={<UserPage/>} />
        <Route path="/operational" element={<Operational/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      
    </Routes>
  
    </>
  )
}

export default App
