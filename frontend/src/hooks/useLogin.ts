import { useState, ChangeEvent, FormEvent} from "react";
import { ApiData, setAuthToken} from "./api";
import { useNavigate } from "react-router-dom";
import { ILoginFrom } from "../interface/IValidation";
// import { AUTH_LOGIN } from "../../../stores/rootReducer";
// import { useDispatch } from "react-redux";

export function useLogin (){
  //  const dispatch = useDispatch()
  //validation login
  const [Validate,setValidate] = useState<ILoginFrom>({
    email:"",
    password:""
})

    const  changeHandlerValidate = (event:ChangeEvent<HTMLInputElement>)=>{
      const { name, value } = event.target;
      setValidate({
            ...Validate,
            [name]:value
        })
    
    }
    const navigate = useNavigate()

    const submitHandelValidate = async (e:FormEvent) =>{
      e.preventDefault()
      try {
         const response = await ApiData.post("/login",Validate)
        //  dispatch(AUTH_LOGIN(response.data))
        localStorage.setItem("token",response.data.token)
        setAuthToken(localStorage.token)
          navigate("/product")
      
      } catch (error) {
          console.log("error submit data",error)
      }
  }
 
 return{changeHandlerValidate,submitHandelValidate}
}