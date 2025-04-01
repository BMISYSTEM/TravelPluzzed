import useSWR from "swr"
import { ClienteAxios } from "../../config/ClienteAxios"
export interface Ayuda {
    succes: Succe[];
}

export interface Succe {
    id:         number;
    nombre:     string;
    apellido:   string;
    telefono:   string;
    email:      string;
    comentario: string;
    createdAt:  Date;
    updatedAt:  Date;
}

export const AyudaPanel = () => {
    const {data} = useSWR('/api/tour/ayuda/index',()=>
        ClienteAxios.get('/api/tour/ayuda/index'))
        const ayudadata:Ayuda = data?.data
        return (
          <section className='text-white'>
            <h1>Ayuda</h1>
             <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
            <thead>
              <tr className="text-left border-b border-gray-600">
                <th className="py-2 px-4">ID</th>
                <th className="py-2 px-4">nombre</th>
                <th className="py-2 px-4">apellido</th>
                <th className="py-2 px-4">email</th>
                <th className="py-2 px-4">telefono</th>
                <th className="py-2 px-4">comentario</th>
              </tr>
            </thead>
            <tbody>
              {ayudadata?.succes?.map((review) => (
                <tr key={review.id} className="border-b border-gray-600">
                  <td className="py-2 px-4">{review.id}</td>
                  <td className="py-2 px-4">{review.nombre}</td>
                  <td className="py-2 px-4">{review.apellido}</td>
                  <td className="py-2 px-4">{review.email}</td>
                  <td className="py-2 px-4">{review.telefono}</td>
                  <td className="py-2 px-4">{review.comentario}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </section>
        )
}
