import {  useEffect, useRef, useState } from 'react'
import { TextBannerEnd } from '../components/TextBannerEnd'
// import { LinkBuscador } from '../components/LinkBuscador'
import banner from '../assets/banner.avif'
import check from '../assets/check.svg'
import person from '../assets/person.svg'
import options from '../assets/options.svg'
import money from '../assets/money.svg'
import 'animate.css'
import { LinkBuscador } from '../components/LinkBuscador'
import useSWR from 'swr'
import { ClienteAxios } from '../../../../config/ClienteAxios'
import { Pais, Succe } from '../interface/PaisInterface'
import { Ciudades } from '../interface/CiudadInterface'
import 'animate.css';

/* imagenes del banner  */
import travel1 from '../assets/travel1.jpg'
import travel2 from '../assets/travel2.jpg'
import travel3 from '../assets/travel3.jpg'
import travel4 from '../assets/travel4.jpg'
import travel5 from '../assets/travel5.jpg'
export const BannerLayout = () => {
    const [buscador,setBuscador] = useState<string>('')
    const [islandSheart,setIslandSheart] = useState(false)
    const buscadorRef = useRef<HTMLInputElement>(null)
    const {data:allpais} = useSWR('/api/pais/index',()=>
    ClienteAxios.get('/api/pais/index'))
    const pais: Pais = allpais?.data
    const {data:allCiudad} = useSWR('/api/ciudades/index',()=>
    ClienteAxios.get('/api/ciudades/index'))
    const ciudad:Ciudades = allCiudad?.data
    let paises:Succe[] = pais?.succes
    let ciudadDetail = ciudad?.succes
    if(buscador !== ''){ 
        const buscarCiudad = ciudadDetail?.filter(data => data.nombre.toLowerCase().includes(buscador.toLowerCase())) 
        const buscarPaises = paises?.filter(data => data.nombre.toLowerCase().includes(buscador.toLowerCase()))   
        if(buscarCiudad?.length > 0){
            paises = paises?.filter(data => Number(data.id) === Number(buscarCiudad?.[0]?.pais))
            console.log(paises)
        }
        if(buscarPaises?.length !== 0){
            ciudadDetail = ciudadDetail.filter(data => Number(data.pais) === Number(buscarPaises?.[0]?.id))
            paises = paises?.filter(data => Number(data.id) === Number(buscarPaises?.[0]?.id))
        }
    }
  return (
    <section className=" relative w-full h-full bg-slate-700   " style={{
        height:'85vh'
    }}>
        <div className='  absolute w-full h-full  flex flex-col gap-3 justify-center items-center p-3'>
            <div className='relative md:w-1/2 w-full h-full flex flex-col gap-3  p-3 justify-end z-50 '>
                <h1 className='text-4xl  text-white' style={{fontFamily: 'Caveat, sans-serif'}}>Llena tu viaje</h1>
                <h2 className='text-4xl  text-white' >Visitas guiadas y excursiones en español por todo el mundo</h2>
                <form action="">
                    <input type="text" ref={buscadorRef} value={buscador} onChange={(e)=>setBuscador(e.target.value)} placeholder='Busca tu destino con nosotros' className='border-2 border-[rgb(243,245,79)] p-3 rounded-xl md:w-[40rem] w-full' onClick={()=>setIslandSheart(true)} />
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
                            <div className='w-full flex flex-wrap p-3 gap-x-20 gap-y-10 justify-center h-96  '  >
                                {pais?.succes ? 
                                    paises?.map((pais,index)=>(
                                        <LinkBuscador  key={index} textPrimary={pais?.nombre} textSecond={ciudadDetail?.filter(data => Number(data.pais) === Number(pais.id))} id={pais?.id}/>
                                    ))
                                    :
                                    null
                                }
                            </div>
                        </section>
                    : null}
                </form>
            </div>
            <div className='flex flex-row md:gap-6 items-end h-2/4 justify-end z-40'>
                <TextBannerEnd icon={check} text='Las mejores actividades'/>
                <TextBannerEnd icon={person} text='Atención al cliente 24/7'/>
                <TextBannerEnd icon={options} text='Miles de opiniones'/>
                <TextBannerEnd icon={money} text='Precios finales'/>
            </div>
        </div>
        <CarrouselImagen/>
    </section>
  )
}


const CarrouselImagen = () =>{
    const [visibleImagen,setVisibleImagen] = useState(1)
    useEffect(()=>{
        setTimeout(()=>{
            if(visibleImagen < 5 ){
                setVisibleImagen(visibleImagen + 1)
            }else{
                setVisibleImagen(1)
            }
        },9000)
    })
    return (
        <div className='w-full overflow-hidden relative' style={{
            height:'85vh'
            }}>
            <div className='absolute w-full h-full bg-black/20 z-40 flex flex-row items-start p-3 justify-end'>
               
                {visibleImagen === 1 ? 
                    <p className='text-2xl font-bold text-white'>Big Ben, Londres</p>
                : null}
                {visibleImagen === 2 ? 
                    <p className='text-2xl font-bold text-white'>Paisaje en Venecia</p>
                : null}
                {visibleImagen === 3 ? 
                    <p className='text-2xl font-bold text-white'>Cancún, Mexico</p>
                : null}
                {visibleImagen === 4 ? 
                    <p className='text-2xl font-bold text-white'>Burj Al Arab, Dubái</p>
                : null}
                {visibleImagen === 5 ? 
                    <p className='text-2xl font-bold text-white'>Cataratas de Iguazú</p>
                : null}
            </div>
            {visibleImagen === 1 ? 
                <img src={travel1} alt="Imagen de travel" className='animate__animated animate__fadeIn w-full h-full md:object-fill object-cover' />
            : null}
            {visibleImagen === 2 ? 
                <img src={travel2} alt="Imagen de travel" className='animate__animated animate__fadeIn w-full h-full md:object-fill object-cover' />
            : null}
            {visibleImagen === 3 ? 
                <img src={travel3} alt="Imagen de travel" className='animate__animated animate__fadeIn w-full h-full md:object-fill object-cover' />
            : null}
            {visibleImagen === 4 ? 
                <img src={travel4} alt="Imagen de travel" className='animate__animated animate__fadeIn w-full h-full md:object-fill object-cover' />
            : null}
            {visibleImagen === 5 ? 
                <img src={travel5} alt="Imagen de travel" className='animate__animated animate__fadeIn w-full h-full md:object-fill object-cover' />
            : null}
           
        </div>
    )
}