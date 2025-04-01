import { useEffect } from 'react'
import {IoAlertCircleSharp} from 'react-icons/io5'
import { Link } from 'react-router-dom';
import { ClienteAxios } from '../../../config/ClienteAxios';
export const CancelPedido = () => {
    const confirPedido = async() =>{
      const params = new URLSearchParams(window.location.search);
      const token = params.get('token'); // Obtiene el valor del parámetro `token`
      await ClienteAxios.post('/compra/cancel',{token:token})
    }
    useEffect(() => {
        confirPedido()
      }, []);
  return (
    <section className='w-full h-full min-h-screen flex items-center justify-center'>
      <div className='w-full h-screen flex flex-col items-center justify-center'>
        <IoAlertCircleSharp color='red' size={200}/>´
        <p className='text-3xl font-semibold'>No se pudo confirmar el pedido de forma correcta</p>
        <Link to={'/'} className='text-blue-500 mt-5'>Volver a inicio</Link>
      </div>
    </section>
  )
}
