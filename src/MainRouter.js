import { useEffect } from "react"
import { useAuth } from "./Auth"
import { Outlet, useNavigate } from "react-router-dom"

export const MainRouter = () =>{
    const auth = useAuth()
    const navigate = useNavigate()
    useEffect(()=>{
        if(auth.user == null) {
            navigate('/login')
        }
    })
    return <Outlet/>
}
export const LoginRouter = () =>{
    const auth = useAuth()
    const navigate = useNavigate()
    useEffect(()=>{
        if(auth.user != null) {
            navigate('/')
        }
    })
    return <Outlet/>
}