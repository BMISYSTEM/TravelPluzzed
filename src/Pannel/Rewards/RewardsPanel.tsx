
import useSWR from 'swr'
import { ClienteAxios } from '../../config/ClienteAxios'
export interface Rew {
  succes: Succe[];
}

export interface Succe {
  id:        number;
  nombre:    string;
  apellido:  string;
  telefono:  string;
  email:     string;
  createdAt: Date;
  updatedAt: Date;
}

export const RewardsPanel = () => {
  const {data} = useSWR('/api/tour/rewards/index',()=>
  ClienteAxios.get('/api/tour/rewards/index'))
  const rewards:Rew = data?.data
  return (
    <section className='text-white'>
      <h1>Rewards</h1>
       <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
      <thead>
        <tr className="text-left border-b border-gray-600">
          <th className="py-2 px-4">ID</th>
          <th className="py-2 px-4">nombre</th>
          <th className="py-2 px-4">apellido</th>
          <th className="py-2 px-4">email</th>
          <th className="py-2 px-4">telefono</th>
        </tr>
      </thead>
      <tbody>
        {rewards?.succes?.map((review) => (
          <tr key={review.id} className="border-b border-gray-600">
            <td className="py-2 px-4">{review.id}</td>
            <td className="py-2 px-4">{review.nombre}</td>
            <td className="py-2 px-4">{review.apellido}</td>
            <td className="py-2 px-4">{review.email}</td>
            <td className="py-2 px-4">{review.telefono}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </section>
  )
}
