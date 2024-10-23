import { Link } from 'react-router-dom';
import ubication from '../assets/ubication.svg';
import { Star } from '../../Wishlist/components/star-componente';
import { imagen } from '../assets/Imagen';


const UbicationImages = () => {
    return (
        <div className='p-4 pt-2 gap-2 w-full flex flex-row'>
                    <div className='w-4/5'>
                        <p className='pl-12 text-3xl text-gray-800'>Opiniones de nuestros clientes</p>
                        <div className='pl-12 pt-4 gap-2 flex flex-row'>
                            <img src={ubication} className='w-6' />
                            <p className='text-gray-600'>Informacion de ubicacion</p>
                        </div>
                    </div>

                    <div className=' flex items-center justify-center'>
                        <div className='gap-2'>
                            <div className='gap-2 flex flex-row'>
                                <p className='font-bold text-red-600 text-4xl items-center'>9/10</p>
                                <p className='flex items-end'><Star number={4.5} /></p>
                            </div>

                            <div className='gap-2 flex flex-row'>
                                <p className=''>Opiniones</p>
                                <div className='rounded-sm border-r-4 border-red-500'></div>
                                <p className=''>viajeros</p>
                            </div>

                            <div className="p-2 hover: cursor-pointer">
                                <Link to={"/images"}>
                                    <p className="flex flex-row items-center justify-center gap-2 border border-[#F70759] text-[#F70759] font-bold p-2 rounded-full hover:bg-red-500 hover:text-white transition duration-300 ease-in-out">
                                        <span dangerouslySetInnerHTML={{ __html: imagen }} className='group-hover:text-red-500'></span>
                                        Ver detalles
                                    </p>

                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
    )
}

export default UbicationImages