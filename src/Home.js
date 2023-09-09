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

    return <div className=" bg-neutral-800 h-screen">
        {table.map((d,index) =>{
            return <div key = {index}>
                <li>{d.Name}</li>
                <li>{d.Cost}</li>
            </div>
        })}
            <Link to = "/product"><button className=" transition-colors bg-neutral-100 w-48 h-14 rounded-xl text-3xl hover:bg-neutral-200 active:bg-neutral-400">Sell?</button></Link>
        
    </div>
}