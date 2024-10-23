
import { Link } from "react-router-dom"
import { TargetPrincipal } from "../components/TargetPrincipal"
import Bogota from '../assets/Bogotá.webp'


interface mainActivitiesInterface{
    citi:string;
    activities:string;
    traveler:string;
    opinions:string;
    valorate:string;
}


const arrayActivities:mainActivitiesInterface[] =
[
    {
        citi:'roma',
        activities:'500',
        traveler:'80',
        opinions:'500',
        valorate:'4.5',
    },
    {
        citi:'colombia',
        activities:'500',
        traveler:'80',
        opinions:'500',
        valorate:'4.5',
    },
]

export const MainActivitiesLayout = () => {
    return (
  <section className="w-full flex flex-col items-center justify-center p-6 bg-slate-100">
      <div className="w-full h-16 flex justify-center items-center pb-2">
        <h1 className="text-4xl font-sans text-gray-600">Principales Experiencias</h1>
      </div>

    {/* Targets Principales */}
   
        <div className='flex flex-wrap gap-x-6 gap-y-16'>
          {arrayActivities.map((actividad,index)=>(
             <Link className='' to={"/"} key={index} >
               <TargetPrincipal 
                   IMGcarta={Bogota} 
                   nombre={actividad.citi} 
                   actividades={Number(actividad.activities)} 
                   opiniones={Number(actividad.opinions)} 
                   rating={Number(actividad.valorate)} 
                   viajeros={Number(actividad.traveler)}/>
             </Link>
          ))}
      </div>

    {/* Div con el unico interes de separar elementos */}
    <div className="pb-10"></div>

    {/* Link que crea el Boton de 'Ver Mas' */}
    <Link className='border border-indigo-600 text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out' 
    to={"/"}>
          Ver mas
    </Link>
    
    {/* Div con el unico interes de separar elementos */}
    <div className="py-2"></div>
    
  </section>
    )
  }