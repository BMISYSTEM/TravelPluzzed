import { Link } from "react-router-dom";
import { TargetPrincipal } from "../components/TargetPrincipal";
import panoramicajapon from "../assets/panoramica2.jpg";
import useSWR from "swr";
import { ClienteAxios } from "../../../config/ClienteAxios";
import { Paises } from "../interfaces/paisInterface";



export const MainActivitiesLayout = () => {


  const {data,isLoading} = useSWR('/api/pais/index',()=>
  ClienteAxios.get('/api/pais/index'))
  let paisesDestacados:Paises = data?.data
 
  return (
    <section className="w-full flex flex-col items-center justify-center md:p-6 bg-slate-100">
      <div className="w-full h-16 flex justify-center items-center pb-2">
        <h1 className=" text-3xl text-[rgb(48,74,159)] font-semibold cavea-font " style={{fontFamily: 'Caveat, sans-serif'}}>
          Principales Experiencias
        </h1>
      </div>
      {/* Targets Principales */}
      <div className="flex flex-wrap gap-x-6 gap-y-16 justify-center">
        {isLoading ? 
          <p className="text-xl text-slate-500 animate-pulse">Cargando informacion...</p>
        :
        paisesDestacados?.succes?.map((pais, index) => (
            <Link className="" to={`/pais/${pais.id}`} key={index}>
              <TargetPrincipal
                IMGcarta={`${import.meta.env.VITE_URL_BACK_IMG}${pais.imagen}`}
                nombre={pais.nombre}
                actividades={Number(0)}
                opiniones={Number(0)}
                rating={Number(0)}
                viajeros={Number(0)}
              />
            </Link>
          ))
        }
      </div>

      {/* Div con el unico interes de separar elementos */}
      <div className="pb-10"></div>
      
      <div className="w-full h-16 flex justify-center items-center pb-2">
        <h1 className="md:text-4xl font-sans text-3xl text-[rgb(48,74,159)]  mt-5 font-semibold" style={{fontFamily: 'Caveat, sans-serif'}}>
          Experiencias Recomendadas
        </h1>
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
        <img
          src={panoramicajapon}
          alt=""
          className="w-full h-full object-fill "
        />
      </div>
    </section>
  );
};
