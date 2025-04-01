import  { useEffect } from 'react'
import {IoCheckmarkCircleSharp} from 'react-icons/io5'
import { Link } from 'react-router-dom';
import { ClienteAxios } from '../../../config/ClienteAxios';
export const ConfiPedido = () => {
    const confirPedido = async() =>{
      const params = new URLSearchParams(window.location.search);
      const token = params.get('token'); // Obtiene el valor del parámetro `token`
      await ClienteAxios.post('/api/compra/confirma',{token:token})
    }
    useEffect(() => {
        confirPedido()
      }, []);
  return (
    <section className='w-full h-full min-h-screen flex items-center justify-center'>
      <div className='w-full h-screen flex flex-col items-center justify-center'>
        <IoCheckmarkCircleSharp color='green' size={200}/>´
        <p className='text-3xl font-semibold'>Pedido registrado de forma correcta</p>
        <Link to={'/'} className='text-blue-500 mt-5'>Volver a inicio</Link>
      </div>
    </section>
  )
}
