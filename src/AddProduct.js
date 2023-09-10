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

    const EnterComplete =()=>{
        return <div className="h-36 w-52 bg-lime-400">
            Hello
        </div>
    }

    return <div className="bg-neutral-800">
            <div className=" inline-flex">
                <div className=" bg-neutral-800 h-screen ml-20">
                    <div className=" ms-10 pt-16">
                        <input onChange={(e)=>{
                            setSearch(e.target.value)
                            Searching(e.target.value)
                        }} type = "text" placeholder="Name..." value = {search} className=" bg-neutral-100 hover:bg-neutral-100 rounded h-10 w-80 shadow-md text-xl"/>
                    </div>
                    <div className=" ms-10 pt-10">
                        <input ref = {cost} type = "number" min = "0" placeholder="Cost..." className=" bg-neutral-100 hover:bg-neutral-100 rounded h-10 w-80 shadow-md text-xl"/>
                    </div>
                    <div className=" ms-10 pt-20">
                        <button className = "text-xl transition-colors bg-lime-400 h-10 w-60 rounded-lg hover:bg-lime-500 active:bg-lime-600 shadow-md" onClick={()=>{
                            Axios.post('http://localhost:3001/sell',{
                                name : search,
                                cost : cost.current.value,
                                userID : auth.user
                            })
                            setSearch("")
                            cost.current.value = ""
                        }}>
                            Enter
                        </button>
                    </div>


                    <div className=" bg-neutral-300 w-56 h-fit ms-10 mt-10 rounded-md overflow-hidden">
                    {show.map((d,index) =>{
                            return <div key = {index}>
                                <div className=" transition-colors flex justify-center place-content-center hover:bg-neutral-500 hover:shadow-md active:bg-neutral-600 text-lg" onClick={()=>{
                                    setSearch(d)
                                }}>{d}</div>
                            </div>
                        })}
                    </div>
                    
                </div>
                <div className=" w-[60rem] h-[40rem] bg-neutral-900 ms-20 mt-16 rounded-lg">
                        <div className=" bg-white h-60 w-96 mt-10 ml-10 rounded-md">
                            img
                        </div>
                        <div className=" bg-white h-60 w-5/6 mt-10 ml-10 rounded-md">
                            data data data data
                        </div>
                </div>
            </div>
        </div>
}