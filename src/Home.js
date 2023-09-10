import Axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Home = () =>{
    const [table,setTable] = useState([])
    useEffect(()=>{
        realtimegetData()
    },[])
    const getData = async() =>{
        Axios.get('http://localhost:3001/warframemarket')
            .then((data) =>{
                setTable(Array.from(data.data).slice(0,10))
            })
        
    }
    const realtimegetData = async() =>{
        getData();
    }

    return <div className=" bg-neutral-800 h-screen flex justify-center place-content-center">
        <div className=" bg-neutral-400 h-[40rem] w-[70rem] mt-10 rounded-xl shadow-md">
            <div className=" text-5xl mt-3 ml-3">
                Realtime Table
            </div>
            <div className=" w-4/5 h-4/5 bg-white justify-center place-content-center m-auto rounded-md mt-10 shadow-md">
                {table.map((d,index) =>{
                    return <div key = {index} className=" transition-colors flex justify-center place-content-center border-b-neutral-600 border-b-2 h-10 text-2xl shadow-md">
                        <div className="w-1/2 border-r-2 border-b-neutral-600">
                            {d.Name}
                        </div>
                        <div className="w-1/2">
                            {d.Cost}
                        </div>
                    </div>
                })}
            </div>
            
        </div>
    </div>
}