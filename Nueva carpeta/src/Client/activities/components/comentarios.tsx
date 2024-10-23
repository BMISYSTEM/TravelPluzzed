import children from '../assets/children.svg';
import { Star } from '../../Wishlist/components/star-componente';
import {aprobado} from '../assets/aprobado';

interface mensajeProps {
    nombre: string;
    mensaje: string;
    ciudad: string;
    pais: string;
    calificacion: number;
}


const Comentarios = ({mensaje,nombre,ciudad,pais,calificacion}:mensajeProps) => {

    const primeraLetra = nombre.charAt(0).toUpperCase();

    return (
        <div className='w-full gap-2 p-4 flex flex-row'>
                    <div className='pl-12 flex items-start'>
                        <Star number={calificacion} />
                    </div>
                    <div className='w-3/5 p-2'>
                        <div className='flex flex-row gap-2'>
                            <div className='rounded-full bg-blue-300 px-6 py-2'>
                                <p className='text-2xl'>{primeraLetra}</p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-xl'>{nombre}</p>
                                <p className='text-sm text-gray-600'>{ciudad}, {pais}</p>
                            </div>
                        </div>

                        <div className='text-sm pt-2'>
                            <p className='font-normal'>{mensaje}</p>
                        </div>  
                    </div>

                    <div className="flex justify-end w-2/6 p-2 pr-14">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-row gap-2 justify-end items-start">
                                <p>Viajo con hijos pequeños</p>
                                <img src={children} className='w-6' />
                            </div>
                                <div className="flex flex-row gap-2 items-end justify-end">
                                    <div className='flex items-center justify-center gap-2'>
                                        <p>¿Útil?</p>
                                        <button className="flex flex-row items-center justify-center gap-2 border border-[#F70759] text-[#F70759] font-bold p-2 rounded-full hover:bg-red-500 hover:text-white transition duration-300 ease-in-out">
                                            <span dangerouslySetInnerHTML={{ __html: aprobado }} className='group-hover:text-white'></span>
                                        </button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>


    )
}

export default Comentarios