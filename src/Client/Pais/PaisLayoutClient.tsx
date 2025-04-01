import { Link, useParams } from "react-router-dom"
import { ClientNav } from "../Header/nav/ClientNav"
import useSWR from "swr"
import { ClienteAxios } from "../../config/ClienteAxios"
import { TargetPrincipal } from "../MainActivities/components/TargetPrincipal";
import { ClientFooter } from "../Footer/ClientFooter";
import { useEffect, useState } from "react";
import { PaisData } from "./interfaces/paisData";
import { CiudadData } from "./interfaces/ciudadData";
import { CiudadFreetours } from "./interfaces/ciudadFreetours";

export interface Pais {
  succes: Succes;
}

export interface Succes {
  id:        number;
  nombre:    string;
  prefijo:   number;
  imagen:    string;
  destacado: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface Ciudades {
  succes: Succeciudad[];
}

export interface Succeciudad {
  id:        number;
  nombre:    string;
  pais:      number;
  destacado: number;
  imagen:    string;
  createdAt: Date;
  updatedAt: Date;
}

export const PaisLayoutClient = () => {
    const {id} = useParams()
    const [paisData,setPaisData] = useState<PaisData>() 
    const [ciudadData,setCiudadData] = useState<CiudadData>()
    const consultaData = async() =>{
      const {data:paisData} = await ClienteAxios.get<PaisData>('/api/pais/find/'+id)
      setPaisData(paisData)
      const {data:ciudadData} = await ClienteAxios.get<CiudadData>('/api/ciudades/find/'+id)
      setCiudadData(ciudadData)
    }
    const pais = paisData?.succes
    const ciudad = ciudadData?.succes
    useEffect(()=>{
      consultaData()
    },[])
  return (
    <section className="w-full flex flex-col">
      <ClientNav/>
      <section className="relative w-full h-96 ">
        <div className="text-6xl absolute font-bold text-white mt-[10%] mx-5">
          <p>{pais?.nombre}</p>
        </div>
        <img src={`${import.meta.env.VITE_URL_BACK_IMG}${pais?.imagen}`} alt="" className="w-full h-full object-cover" />
      </section>
      <section className="w-full h-full flex flex-col mt-10 text-center">
        <p className="text-3xl justify-center font-semibold text-slate-700">Ciudades de {pais?.nombre}</p>
        {/* ciudades */}
        <div className="w-full flex flex-wrap p-2 gap-4 justify-center mt-5">
          {ciudad?.map((ciudad,index)=>(
            <Link to={`/actividades/${pais?.id}/${ciudad.id}`}>
              <TargetPrincipal IMGcarta={`${import.meta.env.VITE_URL_BACK_IMG}/${ciudad.imagen}`} 
              actividades={0} opiniones={0} rating={0} viajeros={0} nombre={ciudad.nombre} key={index}/>
            </Link>
          ))}
        </div>
      </section>
      <ClientFooter/>
    </section>
  )
}
