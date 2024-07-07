import 'animate.css';
import { useState } from 'react';

interface props {
    IMGcarta: string;
    nombre: string;
    actividades: number;
    viajeros: number;
    opiniones: number;
    rating: number;

}



export const TargetPrincipal = ({IMGcarta,nombre, actividades, viajeros, opiniones, rating }: props ) => {
    const [hoverAnimet,sethoverAnimet] = useState(false)
    return (

    <div className="relative w-[25rem] h-[15rem] flex justify-center items-center group">
        <div className="absolute w-full h-full flex flex-row justify-between items-center " onMouseOver={()=>sethoverAnimet(true)}>
            <div className='relative w-full h-full'>
                <div className='absolute w-full h-full text-end flex items-end p-3 bg-black/20'>
                    <h1 className="text-3xl text-white font-bold gap-3    ">{nombre}</h1>
                </div>
                <img src={IMGcarta} alt="" className="  w-full h-full object-cover "  />

            </div>
        </div>

        <div className={` ${hoverAnimet ? 'flex' : 'hidden'} absolute text-white inset-0 bg-indigo-600  flex-col overflow-hidden animate__animated animate__fadeIn`}
          onMouseOver={()=>sethoverAnimet(true)} onMouseOut={()=>sethoverAnimet(false)} >
          <h2 className="text-3xl font-extrabold pl-8 pt-8">{nombre}</h2>

          <div className="flex flex-row items-center pt-6   animate__animated animate__bounceInUp ">

                <div className=" w-full flex flex-col items-start text-3xl font-extrabold pl-8 ">
                    <div className="flex flex-col">
                        <h3 className="">{actividades}</h3>
                        <p className="text-sm font-light animate-fade-up">Actividades</p>
                    </div>
                    <div className="flex flex-col pt-4">
                        <h4 className="">{viajeros}</h4>
                        <p className="text-sm font-light">Viajeros</p>
                    </div>
                </div>

                <div className="w-full flex flex-col items-start text-3xl font-extrabold pl-8" >
                        <div>
                            <h5>{opiniones}</h5>
                            <p className="text-sm font-light">Opiniones</p>
                    </div>
                    <div className="pt-4">
                        <p><span>{rating}</span>/10</p>
                        <p className="text-sm font-light">Valoracion</p> 
                    </div>
            </div>
          
          </div>
        </div>
  </div>

    )
}
