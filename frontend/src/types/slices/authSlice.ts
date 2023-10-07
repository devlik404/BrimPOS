import { setAuthToken } from "../../hooks/api";
import {createSlice} from "@reduxjs/toolkit"

interface Users{
    username:string,
    email:string
}

 const initalAuthState: Users = {
     username: "",
     email: "",
 }

export const authSlice = createSlice({
name:"auth",
initialState:initalAuthState,
reducers:{
    AUTH_LOGIN:(_,action)=>{
      const userPayload = action.payload
      setAuthToken(userPayload.token)

        localStorage.setItem("token",userPayload.token)
        
         const user: Users = {
             username: userPayload.user.username,
             email: userPayload.user.email,

         };

        return user
    },
    AUTH_CHECK:(_, action)=>{
        const userPayload = action.payload
      
        const user: Users = {
            username: userPayload.user.username,
            email: userPayload.user.email,

        };

        return user
        
    },
    
    AUTH_ERROR:()=>{
        localStorage.removeItem("token")
    },
    AUTH_LOGOUT:()=>{
        localStorage.removeItem("token")
    return initalAuthState;
    },
    }
})
