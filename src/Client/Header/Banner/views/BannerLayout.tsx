import { useEffect, useRef, useState } from 'react'
import { TextBannerEnd } from '../components/TextBannerEnd'
// import { LinkBuscador } from '../components/LinkBuscador'
import banner from '../assets/banner.avif'
import check from '../assets/check.svg'
import person from '../assets/person.svg'
import options from '../assets/options.svg'
import money from '../assets/money.svg'
import 'animate.css'
import { Countrys } from '../interface/ConfigInterface';
import { useLocations } from '../hooks/useLocations'
import { LinkBuscador } from '../components/LinkBuscador'
import useSWR from 'swr'
import { ClienteAxios } from '../../../../config/ClienteAxios'
import { Pais } from '../interface/PaisInterface'
import { Ciudades } from '../interface/CiudadInterface'


export const BannerLayout = () => {
    const {Config} = useLocations();
    const [islandSheart,setIslandSheart] = useState(false)
    const [locations,setLocations] = useState<Countrys | null >(null)
    const buscadorRef = useRef<HTMLInputElement>(null)

    // se crea una unica vez al cargara pagina o componente 
    useEffect(()=>{
        Config(setLocations)
    },[])


    const {data:allpais,isLoading:paisLoading} = useSWR('/api/pais/index',()=>
    ClienteAxios.get('/api/pais/index'))
    const pais: Pais = allpais?.data
    const {data:allCiudad,isLoading:ciudadLoading} = useSWR('/api/ciudades/index',()=>
    ClienteAxios.get('/api/ciudades/index'))
    const ciudad:Ciudades = allCiudad?.data
    const ciudadDetail = ciudad?.succes
  return (
    <section className=" relative w-full h-full    " style={{
        height:'85vh'
    }}>
        <div className='  absolute w-full h-full  flex flex-col gap-3 justify-center items-center p-3'>
            <div className='relative md:w-1/2 w-full h-full flex flex-col gap-3  p-3 justify-end '>
                <h1 className='text-2xl font-sans text-white'>Llena tu viaje</h1>
                <h2 className='text-4xl font-sans text-white'>Visitas guiadas y excursiones en español por todo el mundo</h2>
                <form action="">
                    <input type="text" ref={buscadorRef} placeholder='Busca tu destino con nosotros' className='p-3 rounded-xl md:w-[40rem] w-full' onClick={()=>setIslandSheart(true)} />
                    {islandSheart ? 
                        <section className='absolute md:ml-[-11rem] md:w-[60rem] w-full overflow-auto z-50 h-auto bg-white rounded-xl mt-2 shadow-2xl flex flex-col p-2 animate__animated animate__fadeIn'>
                            <div className='w-full flex items-end justify-end'>
                                <button onClick={()=>setIslandSheart(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </button>
                            </div>
                            <p className='text-2xl font-bold text-rose-600 text-center'>Top destinos</p>
                            <div className='w-full flex flex-wrap p-3 gap-x-20 gap-y-10 justify-center h-96 ' >
                                {pais?.succes ? 
                                    pais?.succes?.map((pais,index)=>(
                                        <LinkBuscador  key={index} textPrimary={pais?.nombre} textSecond={ciudadDetail?.filter(data => data.id === pais.id)} id={pais?.id}/>
                                    ))
                                    :
                                    null
                                }
                            </div>
                        </section>
                    : null}
                </form>
            </div>
            <div className='flex flex-row md:gap-6 items-end h-2/4 justify-end  '>
                <TextBannerEnd icon={check} text='Las mejores actividades'/>
                <TextBannerEnd icon={person} text='Atención al cliente 24/7'/>
                <TextBannerEnd icon={options} text='Miles de opiniones'/>
                <TextBannerEnd icon={money} text='Precios finales'/>
            </div>
        </div>
        <div className='w-full overflow-hidden' style={{
        height:'85vh'
        }}>
            <img src={banner} alt="" className='w-full h-full md:object-fill object-cover'/>
        </div>
    </section>
  )
}