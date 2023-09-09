import Axios from "axios"
import { createContext, useContext, useState } from "react"


const AuthContext = createContext(null)
export const Authentication = ({children}) =>{
    const [user,setUser] = useState()
    const Login = (Email,Password) =>{
        // Axios.get("http://localhost:3001/warframemarket")
        // .then((res)=>{
        //     console.log(JSON.stringify(res.data))

        // })
        Axios.post('http://localhost:3001/auth',{
            email : Email,
            password : Password
        })
        .then((response) =>{
            if(response.data.id) {setUser(response.data.id)}
            else {setUser(null)}
        })
    }
    const Register = (Email,Password) =>{
        Axios.post('http://localhost:3001/register',{
            email : Email,
            password : Password
        })
    }
    return <AuthContext.Provider value = {{Login,user,Register}}>{children}</AuthContext.Provider>
}
export const useAuth = () =>{
    return useContext(AuthContext)
}