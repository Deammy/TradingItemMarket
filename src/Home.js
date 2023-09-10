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
        <div className=" bg-neutral-400 h-fit w-fit justify-center place-content-center">
            {table.map((d,index) =>{
                return <div key = {index} className=" transition-colors flex justify-center place-content-center">
                    <div >
                        {d.Name}
                    </div>
                    <div>
                        {d.Cost}
                    </div>
                </div>
            })}
        </div>
    </div>
}