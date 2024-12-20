import { Link, useParams } from "react-router-dom"
import { ClientNav } from "../../Client/Header/nav/ClientNav"
import { ClientFooter } from "../../Client/Footer/ClientFooter"
import { Star } from "../../Client/Wishlist/components/star-componente"
import ubication from './assets/ubication.svg';
import information from './assets/information.svg';
import ShareButton from "../../Client/activities/components/shareButton.";
import ImagesProducts from "../../Client/activities/components/ImagesProducts";
import ButtonMovility from "../../Client/activities/components/movilty";
import CalendarioLocal from "../../Client/activities/components/calendarioLocal";
import useSWR from "swr";
import { ClienteAxios } from "../../config/ClienteAxios";
import { Tour } from "./interfaces/tourInterface";


export interface Fotos {
    succes: Succe[];
}

export interface Succe {
    id:        number;
    url:       string;
    createdAt: Date;
    updatedAt: Date;
    tourId:    number;
}

export default function ActividadLayout() {
    const {id} = useParams()
    /* consultar galeria */

    const {data:fotos,isLoading:fotosLoading} = useSWR('/api/tour/index/fotos/'+id,()=>
    ClienteAxios.get('/api/tour/index/fotos/'+id))
    const {data:tourdata,isLoading:tourLoading} = useSWR('/api/tour/find/'+id,()=>
    ClienteAxios.get('/api/tour/find/'+id))
    const foto:Fotos = fotos?.data
    const tour:Tour = tourdata?.data
  return (
    <section className="w-full h-full">
        <ClientNav/>

        <section className="w-full h-full bg-slate-100 overflow-hidden ">
            <div className="flex flex-col w-full h-full">
                <div className="flex flex-row p-4 pl-8 pr-8 justify-between w-full ">
                    <div className='flex flex-row gap-4 w-1/2 pl-8'>
                        <Link to={`/country/${1}`}>
                            <p className="rounded-sm px-2 bg-slate-200 text-red-600">Volver</p>
                        </Link>
                    </div>

                    <div>
                        <ShareButton />
                    </div>
                </div>

                <div className='flex flex-row justify-between pl-4 items-center'>
                    <div className='text-4xl font-bold text-black pl-12 p-4'>{tour?.succes?.[0].nombre}</div>
                    <div className='flex flex-col pr-12 gap-2'>
                        <div className='flex flex-row gap-2 justify-end items-end'>
                            <p className='text-sm text-gray-500 justify-end items-end'>Desde  USD</p>
                            <div className='text-4xl font-bold text-red-600'> {tour?.succes?.[0].precio} USD</div>
                        </div>
                        <a href={'#calendario'}>
                            <div className='text-white bg-red-600 rounded-full hover:bg-red-900 flex justify-center items-center'><p className='text-xm'>Ver disponibilidad</p></div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Images of the product */}
            <ImagesProducts succes={foto?.succes}/>

            {/* Buttons for movility in the page */}

            <ButtonMovility />


            {/* Informations relacionated an buttons the movility before*/}
            <div className='w-full h-full'>
                <div className='flex flex-row'>
                    <div className='p-4 w-2/3 bg-gray-100 gap-8'>
                    <section id='descripcion'>
                        <p dangerouslySetInnerHTML={{ __html: tour?.succes?.[0].descripcion }} className='pl-12 text-xl'/>

                        {/* Information general */}
                        <div>
                            <div className='pl-12 flex flex-col gap-2 items-start pt-4'>
                                <p className='text-2xl flex flex-row gap-2'>
                                    <img src={information} className='w-6' />
                                    Incluido
                                </p>
                                <p dangerouslySetInnerHTML={{ __html: tour?.succes?.[0].incluye }} className='pl-12 text-xl'/>
                            </div>
                            <div className='pl-12 flex flex-col gap-2 items-start pt-4'>
                                <p className='text-2xl flex flex-row gap-2'>
                                    <img src={information} className='w-6' />
                                    Intinerario
                                </p>
                                <p dangerouslySetInnerHTML={{ __html: tour?.succes?.[0].intinerario }} className='pl-12 text-xl'/>
                            </div>

                            <div className='pl-12 '>
                                <p className='text-2xl flex flex-row gap-2'>
                                    <img src={information} className='w-6' />
                                    No incluido
                                </p>
                                <p dangerouslySetInnerHTML={{ __html: tour?.succes?.[0].no_incluye }} className='pl-12 text-xl'/>
                                <div className='border-b border-gray-300 my-4'></div>
                            </div>
                            <div className='pl-12 '>
                                <p className='text-2xl flex flex-row gap-2'>
                                    <img src={information} className='w-6' />
                                    Salidas
                                </p>
                                <p dangerouslySetInnerHTML={{ __html: tour?.succes?.[0].salidas }} className='pl-12 text-xl'/>
                                <div className='border-b border-gray-300 my-4'></div>
                            </div>
                            <div className='pl-12 '>
                                <p className='text-2xl flex flex-row gap-2'>
                                    <img src={information} className='w-6' />
                                    Accesibilidad
                                </p>
                                <p dangerouslySetInnerHTML={{ __html: tour?.succes?.[0].accesibilidad }} className='pl-12 text-xl'/>
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
                        <CalendarioLocal   />
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
                        <p className='text-gray-600'>{tour?.succes?.[0].punto_encuentro}</p>
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
                                <p className='font-bold text-red-600 text-2xl items-center'>Comentarios {300}</p>
                                <p className='flex items-end'><Star number={5} /></p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Comentarios */}
                {/* {product?.comentarios.data?.map((coment,index)=>(
                    <Comentarios  calificacion={coment.rate} ciudad='Cali' mensaje={coment.content} nombre={coment.reviewerName} pais={coment.title}/>

                ))} */}
            </section>
           
        </section>
        <ClientFooter/>
    </section>
  )
}
