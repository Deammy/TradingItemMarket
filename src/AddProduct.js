import Axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useAuth } from "./Auth"

export const AddProduct = () =>{
    const [search,setSearch] = useState("")
    const [show,setShow] = useState([])
    const [data,setData] = useState([])
    const cost = useRef()
    const auth = useAuth()
    const Searching=(e)=>{
        const temp = []
        let cnt = 0;
        if(e != ""){
            for(let i = 0 ; i < data.length ; i++){
                if(data[i].Name.indexOf(e) > -1){
                    temp[cnt++] = data[i].Name
                }
            }
        }
        setShow(temp)
    }
    useEffect(()=>{
        Axios.get('http://localhost:3001/item')
        .then((data)=>{
            setData(Array.from(data.data))
        })
    },[])
    return <div className=" bg-neutral-800 h-screen">
            <div className=" ms-10 pt-16">
                <input onChange={(e)=>{
                    setSearch(e.target.value)
                    Searching(e.target.value)
                }} type = "text" placeholder="Name..."  className=" bg-neutral-100 hover:bg-neutral-100 rounded h-10 w-80 shadow-md text-xl"/>
            </div>
            <div className=" ms-10 pt-10">
                <input ref = {cost} type = "number" placeholder="Cost..." className=" bg-neutral-100 hover:bg-neutral-100 rounded h-10 w-80 shadow-md text-xl"/>
            </div>
            <div className=" ms-10 pt-20">
                <button className = "text-xl transition-colors bg-lime-400 h-10 w-60 rounded-lg hover:bg-lime-500 active:bg-lime-600 shadow-md" onClick={()=>{
                    Axios.post('http://localhost:3001/sell',{
                        name : search,
                        cost : cost.current.value,
                        userID : auth.user
                    })
                }}>
                    Enter
                </button>
            </div>
            <div className=" bg-neutral-300 w-56 h-fit ms-10 mt-10 rounded-2xl">
            {show.map((d,index) =>{
                    return <div key = {index}>
                        <li>{d}</li>
                    </div>
                })}
            </div>
            
        </div>
}