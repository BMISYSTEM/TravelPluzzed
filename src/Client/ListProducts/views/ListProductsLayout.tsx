import axios from "axios";
import { useEffect, useState } from "react";
import {   useParams } from "react-router-dom"
import { ListaTours } from '../interface/ListProductsInterface';

export const ListProductsLayout = () => {
    const [products,setProducts] = useState<ListaTours>();
    const [loading,setloading] = useState<boolean>(false)
    const {uuid}= useParams();
    useEffect(()=>{
        const consulta = async()=>{
            try {
                setloading(true)
                const {data} = await axios.get(`https://apitravelnode.vercel.app/api/freetours/tours/${uuid}`)
                setloading(false)
                setProducts(data)
            } catch (error) {
                console.log(error)
            }
        }
        consulta()
    },[])
    if(loading){
        return(
            <h1>Cargando la informacion de la api</h1>
        )
    }
    const lista = products?.data?.tours
  return (
    <section className="w-full h-full flex flex-row gap-2">
        {/* filtros */}
        <div className="w-1/6 h-auto flex flex-col bg-red-500">
            <p>filtros</p>
        </div>
        {/* lista productos */}
        <div className="w-full h-full flex flex-col bg-green-500 p-2 gap-4">
            {/* trajeta */}
            {lista ? lista.map((tours,index)=>(
                <div key={index}>
                    <img src={tours.images[0].URL} alt="" />
                    {/* <img src={tours.images[1].URL} alt="" /> */}
                    <p>{tours.title.es}</p>
                    <p>{tours.description.es}</p>
                    <p>{tours.includes}</p>
                    <p>{tours.price.currency}</p>
                    <p>{tours.price.value}</p>
                </div>
            )) : null}
        </div>
    </section>
  )
}
