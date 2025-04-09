import { Star } from '../../Wishlist/components/star-componente';

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
        <div className='w-full gap-2 p-4 flex flex-row border-b '>
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
                            
                         
                        </div>
                    </div>
                </div>


    )
}

export default Comentarios