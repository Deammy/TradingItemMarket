import { useEffect, useRef } from "react"
import {Link, useNavigate} from "react-router-dom"
import { useAuth } from "../Auth"
export const LoginPage = () =>{
    
    const emailRef = useRef("")
    const passwordRef = useRef("")
    const auth = useAuth()
    return<div className="bg-neutral-800 h-screen " >
        <div className="flex justify-center items-center  pt-16">
            <img src = {require("../Pic/settings.png")} className=" w-40 fill-white animate-spin"/>
        </div>
        <div className="flex justify-center items-center pt-16">
            <input ref = {emailRef} type = "email" placeholder="Email..."  className=" bg-neutral-100 hover:bg-neutral-100 rounded h-10 w-80 shadow-md"/>
        </div>
        <div className="flex justify-center items-center pt-10">
            <input ref = {passwordRef} type = "password" placeholder="Password..." className=" bg-neutral-100 hover:bg-neutral-100 rounded h-10 w-80 shadow-md"/>
        </div>
        <div className="flex justify-center items-center pt-28">
            <button className = "text-xl transition-colors bg-lime-400 h-10 w-60 rounded-lg hover:bg-lime-500 active:bg-lime-600 shadow-md"onClick={()=>{
                auth.Login(emailRef.current.value,passwordRef.current.value)
            }}>
                Login
            </button>
        </div>
        
        
        <div className="flex justify-center items-center pt-4">
            <Link to = "/register">
                <h1 className=" text-white hover:opacity-80 active:opacity-40 transition-opacity">
                    Register
                </h1>
            </Link>
        </div>
        
        
    </div>
}
export const RegisterPage = () =>{
    useEffect(()=> {
    },[])
    const emailRef = useRef("")
    const passwordRef = useRef("")
    const auth = useAuth()
    const navigate = useNavigate()
    return<div className="bg-neutral-800 h-screen flex justify-center shadow-sm" >
        <div className = " items-center bg-neutral-600 w-1/4 mr-0 h-fit mt-28 rounded-3xl shadow-2xl">
            <div className="flex justify-center items-center pt-4">
                <a className=" text-white text-4xl">
                    Register
                </a>
            </div>
            <div className="flex justify-center items-center pt-10 shadow-sm">
                <input ref = {emailRef} type = "email" placeholder="Email..."  className=" shadow-xl bg-neutral-100 hover:bg-neutral-100 rounded h-10 w-80"/>
            </div>
            <div className="flex justify-center items-center pt-10">
                <input ref = {passwordRef} type = "password" placeholder="Password..." className=" shadow-xl bg-neutral-100 hover:bg-neutral-100 rounded h-10 w-80"/>
            </div>
            <div className="flex justify-center items-center pt-28 pb-8">
                <button className = "shadow-xl text-xl transition-colors bg-lime-400 h-10 w-60 rounded-lg hover:bg-lime-500 active:bg-lime-600"onClick={async()=>{
                    auth.Register(emailRef.current.value,passwordRef.current.value)
                    setTimeout(()=>{
                        navigate('/login')
                    },1000)
                }}>
                    Submit
                </button>
            </div>
        </div>
        
        
        
    </div>
}