import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
/* import ImagesProducts from '../components/ImagesProducts'; */
import ButtonMovility from '../components/movilty.tsx';
import information from '../assets/information.svg';
import ShareButton from '../components/shareButton..tsx';
import ubication from '../assets/ubication.svg';
import { ClientFooter } from '../../Footer/ClientFooter';
import { DetailProduct } from '../interface/productDetail.ts';
import Calendary from '../components/calendario.tsx';
import { Star } from '../../Wishlist/components/star-componente.tsx';
import { ClienteAxios } from '../../../config/ClienteAxios.ts';


export const ActivitiesLayaout = () => {

    const [showMore, setShowMore] = useState(false);
    const [product, setProducts] = useState<DetailProduct>();
    const [loading, setloading] = useState<boolean>(false);
    const { id } = useParams();
    const handleToggle = () => {
        setShowMore(!showMore);
    }
    /**
     * consulta el detalle de un solo producto
     */
    useEffect(() => {
        const consulta = async () => {
          try {
            setloading(true);
            const { data } = await ClienteAxios.get(
              `/api/freetours/tour/${id}`
            );
            setloading(false);
            setProducts(data);
          } catch (error) {
            console.log(error);
          }
        };
        consulta();
      }, []);
      if (loading) {
        return <h1>Cargando la informacion de la api</h1>;
      }
    const fechasDisponibles = product?.disponibilidad;

    return (
        <section className="w-full h-full bg-slate-100 overflow-hidden ">
            <div className="flex flex-col w-full h-full">
                <div className="flex flex-row p-4 pl-8 pr-8 justify-between w-full ">
                    <div className='flex flex-row gap-4 w-1/2 pl-8'>
                        <Link to={`/country/${product?.data?.countryId}`}>
                            <p className="rounded-sm px-2 bg-slate-200 text-red-600">Volver</p>
                        </Link>
                    </div>

                    <div>
                        <ShareButton />
                    </div>
                </div>

                <div className='flex flex-row justify-between pl-4 items-center'>
                    <div className='text-4xl font-bold text-black pl-12 p-4'>{product?.data?.title?.es}</div>
                    <div className='flex flex-col pr-12 gap-2'>
                        <div className='flex flex-row gap-2 justify-end items-end'>
                            <p className='text-sm text-gray-500 justify-end items-end'>Desde</p>
                            <div className='text-4xl font-bold text-red-600'> {product?.data?.price?.value} {product?.data?.price?.currency}</div>
                        </div>
                        <a href={'#calendario'}>
                            <div className='text-white bg-red-600 rounded-full hover:bg-red-900 flex justify-center items-center'><p className='text-xm'>Ver disponibilidad</p></div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Images of the product */}
            {/* <ImagesProducts succes={product?.data?.images ? product?.data?.images : []!}/> */}

            {/* Buttons for movility in the page */}

            <ButtonMovility />


            {/* Informations relacionated an buttons the movility before*/}
            <div className='w-full h-full'>
                <div className='flex flex-row'>
                    <div className='p-4 w-2/3 bg-gray-100 gap-8'>
                    <section id='descripcion'>
                        <p dangerouslySetInnerHTML={{ __html: product?.data?.description?.es! }} className='pl-12 text-xl'/>
                        <iframe width="560" height="315" src={product?.data?.videoURL ? product?.data?.videoURL : ''}   ></iframe>

                        {/* Information general */}
                        <div>
                            <div className='pl-12 flex flex-row gap-2 items-start pt-4'>
                                <p className='text-2xl flex flex-row gap-2'>
                                    <img src={information} className='w-6' />
                                    Incluido
                                </p>
                                <div className='flex flex-col pl-4'>
                                    {product?.data?.includes?.map((incluido,inedex)=>(
                                        <li key={inedex}>{incluido}</li>

                                    ))}
                                </div>
                            </div>

                            <div className='pl-12 '>
                                <div className='border-t border-gray-300 my-4'></div>

                                <div className=''>
                                    {!showMore && (
                                        <p className="cursor-pointer w-52 text-red-500" onClick={handleToggle}>
                                            Descripcion detallada
                                        </p>
                                    )}

                                    {showMore && (
                                        <div className="">
                                            <p className='text-2xl font-normal text-gray-900'>Titulo de la actividad</p>
                                            <p className='text-xl pt-2 font-normal text-gray-700'> Prueba de texto</p>
                                        </div>
                                    )}
                                </div>
                                <div className='border-b border-gray-300 my-4'></div>
                            </div>
                        </div>
                    </section>


                        {/* Caracteristics*/}
                        <section id='detalles'>
                            {/* <Details />  */}
                        </section>

                        {/* Informacion de cancelaciones comentado por que freetours no devuelve la politica de cancelacion */}
                        {/* <section id='cancelaciones'>
                            <div className='pl-12 gap-2'>
                                <p className='text-3xl font-normal text-gray-900 pb-2'>Cancelacion</p>
                                <p className='text-xl font-normal text-gray-700'> Aqui informacion de prueba</p>
                            </div>
                        </section> */}
                    </div>

                    {/* Calendary */}
                    {fechasDisponibles?.data ? 
                        <Calendary data={fechasDisponibles?.data} status={fechasDisponibles.status} />
                    :
                    null}
                </div>
            </div>
            <div className='w-full h-12 pl-14 pr-12'>
                <div className='border-b border-gray-300 pt-8 '></div>
            </div>

            {/* Informacion de ubicacion y opiniones */}
            <section id='opiniones'>
                <div className='p-4 pt-2 gap-2'>
                    <p className='pl-12 text-3xl text-gray-800'>Punto de encuentro</p>
                    <div className='pl-12 pt-4 gap-2 flex flex-row'>
                        <img src={ubication} className='w-6' />
                        <p className='text-gray-600'>Informacion de ubicacion</p>
                    </div>
                </div>

                <div className='w-full h-12 pl-14 pr-12'>
                    <div className='border-b border-gray-300 pt-8 '></div>
                </div>

                {/* Button Opinions */}
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
                                <p className='font-bold text-red-600 text-2xl items-center'>Comentarios {product?.data.reviewsNumber}</p>
                                <p className='flex items-end'><Star number={product?.data.rating ? product?.data.rating : 0} /></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Comentarios */}
                {/* {product?.comentarios.data?.map((coment,index)=>(
                    <Comentarios  calificacion={coment.rate} ciudad='Cali' mensaje={coment.content} nombre={coment.reviewerName} pais={coment.title}/>

                ))} */}
            </section>
            <ClientFooter/>
        </section>
    )
}