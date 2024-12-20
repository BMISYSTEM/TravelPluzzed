import React from 'react'
import { Link } from 'react-router-dom'

interface props{
    id:number,
    imagen:string,
    titulo:string,
    descripcion:string,
    precio:number
}
export const Tour = ({id,imagen,titulo,descripcion,precio}:props) => {
    return (
        <Link  to={`/actividades/detalle/local/${id}`} className="hover:shadow-xl">
            <div
                className="bg-white w-full h-full flex flex-row rounded-sm"
            >
                <div className=" p-1 items-center justify-center h-44 w-1/4 ">
                    <img
                        className="w-full  h-full object-contain"
                        src={imagen}
                        alt=""
                    />
                </div>
                {/* <img src={tours.images[1].URL} alt="" /> */}
                {/* titulo */}
                <div className="p-2 w-3/4 ">
                    <p className="text-[#F70759] text-2xl font-bold">
                        {titulo}
                    </p>
                    {/* publicidad slogan */}
                    <div className="flex flex-row font-sans">
                        <div className="pr-4">
                            <p className="pt-2 text-lg" dangerouslySetInnerHTML={{ __html: descripcion }}/>
                            {/* que incluye */}
                            <p className="pt-4 pb-4 text-sm text-gray-500 ">
                                {/* {tours.includes} */}
                            </p>
                        </div>
                        <div className=" flex flex-col items-start justify-end">
                            <div className=" text-[#F70759] flex flex-row font-bold text-2xl">
                                {/* valor */}
                                <p className=" pl-2 pr-2 font-bold text-3xl">
                                    {precio}
                                </p>
                                {/* moneda */}
                                <p className="font-bold text-sm pt-4">
                                    USD
                                </p>
                            </div>
                            <div className="p-2">
                                <p className=" border border-[#F70759] text-[#F70759] font-bold px-8 rounded-full hover:bg-[#F70759] hover:text-white transition duration-300 ease-in-out">
                                    Ver detalles
                                </p>
                                <Link to={"/"}></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
