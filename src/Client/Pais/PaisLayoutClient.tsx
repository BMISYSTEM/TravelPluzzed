import { useParams } from "react-router-dom"
import { ClientNav } from "../Header/nav/ClientNav"
import useSWR from "swr"
import { ClienteAxios } from "../../config/ClienteAxios"

export const PaisLayoutClient = () => {
    const {id} = useParams()
    const {data:pais,isLoading:paisLoading} = useSWR('/api/pais/find/'+id,()=>
    ClienteAxios.get('/api/pais/find/'+id))
  return (
    <section className="w-full flex flex-col">
      <ClientNav/>
      <section className="w-full h-1/2 bg-red-500">
        <img src="" alt="" />
      </section>
    </section>
  )
}
