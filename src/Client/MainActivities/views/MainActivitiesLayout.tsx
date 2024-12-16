
import { Link } from "react-router-dom"
import { TargetPrincipal } from "../components/TargetPrincipal"
import Bogota from '../assets/Bogotá.webp'
import jenki from '../assets/jenki.webp'
import panoramicajapon from '../assets/panoramica2.jpg'


interface mainActivitiesInterface{
    citi:string;
    activities:string;
    traveler:string;
    opinions:string;
    valorate:string;
    imagen:string;
}


const arrayActivities:mainActivitiesInterface[] =
[
    {

        citi:'Japon',
        activities:'1',
        traveler:'80',
        opinions:'500',
        valorate:'4.5',
        imagen:jenki
    },
    {
        citi:'colombia',
        activities:'500',
        traveler:'80',
        opinions:'500',
        valorate:'4.5',
        imagen:Bogota
    },
]

export const MainActivitiesLayout = () => {
    return (
  <section className="w-full flex flex-col items-center justify-center md:p-6 bg-slate-100">
      
      <div className="w-full h-16 flex justify-center items-center pb-2">
        <h1 className="text-4xl font-sans text-gray-600">Principales Experiencias</h1>
      </div>

    {/* Targets Principales */}
   
        <div className='flex flex-wrap gap-x-6 gap-y-16 justify-center'>
          {arrayActivities.map((actividad,index)=>(
             <Link className='' to={"/activity/jenki"} key={index} >
               <TargetPrincipal 
                   IMGcarta={actividad.imagen} 
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
    
    <div className="w-full h-16 flex justify-center items-center pb-2">
        <h1 className="md:text-4xl text-2xl font-sans text-gray-600 mt-5 font-semibold">Experiencias Recomendadas</h1>
      </div>
    <div className="relative w-full h-[20rem] bg-green-500 mt-10 bg-gradient-to-r ">
          {/* control de la derecha  */}
          <div className="absolute h-full  w-full flex bg-gradient-to-r bg-slate-900/30 text-white justify-center items-center flex-col gap-2">
            <p className="text-4xl font-bold">元気 Gengki Japón</p>
            <button className="p-2 border-2 font-bold  rounded-2xl backdrop-blur-lg hover:bg-white hover:text-slate-900 transition-all">
              Mas detalles
            </button>
          </div>
          {/* <div className="absolute w-10 h-full  flex bg-gradient-to-r from-slate-950 text-white">
            <button className="hover:text-sky-500 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button> 
          </div> */}
          {/* control de la izquierda */}
          {/* <div className="absolute w-10 h-full  ml-[97.5%] flex bg-gradient-to-l from-slate-950 text-white">
            <button className="hover:text-sky-500 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div> */}
          <img src={panoramicajapon} alt="" className="w-full h-full object-fill " />
    </div>
    
  </section>
    )
  }