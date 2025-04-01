import useSWR from "swr";
import { ClienteAxios } from "../../config/ClienteAxios";
import { Pedidos } from "./interface/pedidos";
import { useState } from "react";
import ReactModal from "react-modal";
import { Pedido } from "./interface/pedido";
import { Link } from "react-router-dom";


export const AdquiridosLayout = () => {
    const [modalDetalle,setModalDetalle] = useState(false)
    const [detalle,setDetalle] = useState<Pedido>()
    /* consulta el detalle de un pedido */
    const verDetalle = async(id: number) => {
        setModalDetalle(true)
        const {data} = await  ClienteAxios.get('/api/compra/find/'+id,{
          headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
          }
        })
        setDetalle(data)
      };
    

      const {data} = useSWR('/api/compra/index',
        ()=>ClienteAxios.get('/api/compra/index',{
          headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
          }
        })
      )
      const pedidos:Pedidos = data?.data
  return (
    <div className="w-full mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-6 text-center">Pedidos</h2>
    <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
      <thead>
        <tr className="text-left border-b border-gray-600">
          <th className="py-2 px-4">ID</th>
          <th className="py-2 px-4">Nombre</th>
          <th className="py-2 px-4">Apellido</th>
          <th className="py-2 px-4">Email</th>
          <th className="py-2 px-4">Telefono 1</th>
          <th className="py-2 px-4">Telefono 2</th>
          <th className="py-2 px-4">Direccion</th>
          <th className="py-2 px-4">Valor total</th>
          <th className="py-2 px-4">Estado del pago</th>
          <th className="py-2 px-4">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {pedidos?.succes?.map((tour) => (
          <tr key={tour.id} className="border-b border-gray-600 text-sm">
            <td className="py-2 px-4">{tour.id}</td>
            <td className="py-2 px-4">{tour.nombre}</td>
            <td className="py-2 px-4">{tour.apellido}</td>
            <td className="py-2 px-4">{tour.email}</td>
            <td className="py-2 px-4">{tour.telefono}</td>
            <td className="py-2 px-4">{tour.telefonorespaldo}</td>
            <td className="py-2 px-4">{tour.direccion}</td>
            <td className="py-2 px-4">{tour.valor_total} USD</td>
            <td className="py-2 px-4">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs text-white ${
                  tour.status === true
                    ? "bg-green-500"
                    : tour.status === false
                    ? "bg-red-500"
                    : null
                }`}
              >
                {tour.status ? 'Pago' : 'Sin pago'}
              </span>
            </td>
            <td className="py-2 px-4 flex space-x-2">
              <button
                onClick={() => verDetalle(tour.id)}
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 rounded transition"
              >
                Detalle
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <ReactModal isOpen={modalDetalle} className={'w-full h-full flex items-center justify-center bg-black/70'}>
        <section className="w-2/3 h-full bg-white p-2">
          <div className="w-full flex flex-row justify-end p-2">
              <button onClick={()=>setModalDetalle(false)} className="bg-red-500 text-white py-1 px-2 hover:opacity-70">
                Cerrar
              </button>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="border">id_tour</th>
                <th className="border">id_pedido</th>
                <th className="border">Dia y hora</th>
                <th className="border">mayores de 15</th>
                <th className="border">menores de 15 a 4</th>
                <th className="border">menores de 3</th>
                <th className="border">Mascotas</th>
                <th className="border">Valor base</th>
                <th className="border">Valor total</th>
                <th className="border">tour</th>
              </tr>
            </thead>
            <tbody>
              {detalle?.succes?.map((pedido,index)=>(
                <tr key={index} className=" text-slate-800 text-sm">
                  <td className="border">{pedido.id_tour}</td>
                  <td className="border">{pedido.id_pedido}</td>
                  <td className="border">{pedido.fecha_tour}</td>
                  <td className="border">{pedido.mayores15}</td>
                  <td className="border">{pedido.menoresde15_a4}</td>
                  <td className="border">{pedido.menores3}</td>
                  <td className="border">{pedido.mascotas}</td>
                  <td className="border">{pedido.valor ? pedido.valor.toString() : 0}</td>
                  <td className="border">{pedido.valor_total ? pedido.valor_total.toString() : 0}</td>
                  <td className="border">
                    <Link to={`/actividades/detalle/local/${pedido.id_tour}`} target="_blank" className="text-blue-400 border-b-2">
                      ver tour
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
    </ReactModal>
  </div>
  )
}
