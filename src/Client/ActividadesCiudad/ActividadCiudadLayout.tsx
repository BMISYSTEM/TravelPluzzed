import { useParams } from "react-router-dom"
import { ClientFooter } from "../Footer/ClientFooter"
import { ClientNav } from "../Header/nav/ClientNav"
import useSWR from "swr";
import { ClienteAxios } from "../../config/ClienteAxios";
import { Tours } from "./Interfaces/TourInterface";
import { Tour } from "./components/Tour";

export interface Ciudades {
    succes: Succeciudad;
}

export interface Succeciudad {
    id: number;
    nombre: string;
    pais: number;
    destacado: number;
    imagen: string;
    createdAt: Date;
    updatedAt: Date;
}

export const ActividadCiudadLayout = () => {
    const { ciudad } = useParams()

    const { data: ciudadData} = useSWR('/api/ciudades/findciudad/' + ciudad, () =>
        ClienteAxios.get('/api/ciudades/findciudad/' + ciudad))
    const ciudadDetalle: Ciudades = ciudadData?.data
    // consultar actividades por ciudad
    const {data:tours} = useSWR('/api/tour/index/ciudad/'+ciudad,()=>
    ClienteAxios.get('/api/tour/index/ciudad/'+ciudad))

    const tourData:Tours = tours?.data
    let tour = tourData?.succes
    return (
        <section className="w-full h-full flex flex-col">
            <ClientNav />
            <section className="w-full h-full mt-10 flex flex-col">
                <section className="relative w-full h-96 ">
                    <div className="text-6xl absolute font-bold text-white mt-[10%] mx-5">
                        <p>{ciudadDetalle?.succes?.nombre}</p>
                    </div>
                    <img src={`${import.meta.env.VITE_URL_BACK_IMG}${ciudadDetalle?.succes?.imagen}`} alt="" className="w-full h-full object-cover" />
                </section>
                <section className="w-full h-full flex flex-row justify-center p-2">
                    {/* filtros */}
                    <div className="w-1/4 h-full md:flex flex-col hidden">

                    </div>
                    {/* contenido */}
                    <div className="w-full flex flex-col gap-5 mt-5 mb-5 ">
                        {tour?.map((tour,index)=>(
                            <Tour key={index} descripcion={tour.descripcion} id={tour.id} 
                            imagen={`${import.meta.env.VITE_URL_BACK_IMG}/${tour.imagen}`} precio={tour.precio} 
                            titulo={tour.nombre}/>
                        ))}
                        
                    </div>
                </section>
            </section>
            <ClientFooter />
        </section>
    )
}
