import { useRef, useState } from 'react'
import { TextBannerEnd } from '../components/TextBannerEnd'
import { LinkBuscador } from '../components/LinkBuscador'
import banner from '../assets/banner.avif'
import check from '../assets/check.svg'
import person from '../assets/person.svg'
import options from '../assets/options.svg'
import money from '../assets/money.svg'
import 'animate.css'

interface listaDestino {
    primary:string;
    second:string;
}
const arrayListdestinos:listaDestino[] = [
    {
        primary:'Roma',
        second:'Italia'
    },
    {
        primary:'nueva York',
        second:'Unite States'
    },
    {
        primary:'Paris',
        second:'Francia'
    },
    {
        primary:'Londres',
        second:'Reino Unido'
    }
    
]
export const BannerLayout = () => {
    const [islandSheart,setIslandSheart] = useState(false)
    const buscadorRef = useRef<HTMLInputElement>(null)
  return (
    <section className=" relative w-full h-[32rem]   bg-red-500  " >
        <div className='  absolute w-full h-full  flex flex-col gap-3 justify-center items-center p-3'>
            <div className='relative w-1/3 h-full flex flex-col gap-3  p-3 justify-end '>
                <h1 className='text-2xl font-sans text-white'>Llena tu viaje</h1>
                <h2 className='text-4xl font-sans text-white'>Visitas guiadas y excursiones en español por todo el mundo</h2>
                <form action="">
                    <input type="text" ref={buscadorRef} placeholder='Busca tu destino con nosotros' className='p-3 rounded-xl w-[40rem]' onClick={()=>setIslandSheart(true)} />
                    {islandSheart ? 
                        <section className='absolute ml-[-11rem] w-[60rem] h-[20rem] bg-white rounded-xl mt-2 shadow-2xl flex flex-col p-2 animate__animated animate__fadeIn'>
                            <div className='w-full flex items-end justify-end'>
                                <button onClick={()=>setIslandSheart(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </button>
                            </div>
                            <p className='text-2xl font-bold text-rose-600 text-center'>Top destinos</p>
                            <div className='w-full flex flex-wrap p-3 gap-x-20 gap-y-10 justify-center ' >
                                {arrayListdestinos.map((destinos,index)=>(
                                    <LinkBuscador  key={index} textPrimary={destinos.primary} textSecond={destinos.second}/>
                                ))}
                            </div>
                        </section>
                    : null}
                </form>
            </div>
            <div className='flex flex-row gap-6 items-end h-2/4 justify-end '>
                <TextBannerEnd icon={check} text='Las mejores actividades'/>
                <TextBannerEnd icon={person} text='Atención al cliente 24/7'/>
                <TextBannerEnd icon={options} text='Miles de opiniones'/>
                <TextBannerEnd icon={money} text='Precios finales'/>
            </div>
        </div>
        <div className='w-full h-[32rem] overflow-hidden'>
            <img src={banner} alt="" className='w-full h-[40rem] object-fill'/>
        </div>
    </section>
  )
}