import { useState } from "react";
import { ClientFooter } from "../Footer/ClientFooter";
import { ClientNav } from "../Header/nav/ClientNav";
import { toast, ToastContainer } from "react-toastify";
import { ClienteAxios } from "../../config/ClienteAxios";

export const Rewards = () => {
  const [nombre,setNombre] = useState('')
  const [apellido,setApellidos] = useState('')
  const [telefono,setTelefono] = useState('')
  const [email,setEmail] = useState('')

  const enviarSolicitud = async(e:React.FormEvent) =>{
    e.preventDefault()
    if(!(nombre && apellido && telefono && email)){
      toast.error('Se deben diligenciar todos los campos ')
      return
    }
    const datos ={
      nombre,apellido,telefono,email
    }
    try {
      toast.promise(ClienteAxios.post('/api/tour/rewards',datos),{
        error:'Se genero un error al solicitar la informacion',
        pending:'Registrando la solicitud',
        success:'Informacion registrada con exito'
      })
    } catch (error) {
      toast.error('Se genero un error inesperado')  
    }finally{

    }
  }
  return (
    <section className="w-full h-full flex flex-col gap-2">
      <ClientNav/>
      <section className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold ">Puzzle Rewards</h1>
        <form action="" onSubmit={enviarSolicitud} className="w-1/2 h-full flex flex-col mt-10">
          <label htmlFor="" className="text-lg font-semibold">Nombre</label>
          <input value={nombre} onChange={(e)=>setNombre(e.target.value)} type="text" className="border py-2 px-2 border-blue-500 rounded-sm" />
          <label htmlFor="" className="text-lg font-semibold">Apellidos</label>
          <input value={apellido} onChange={(e)=>setApellidos(e.target.value)} type="text" className="border py-2 px-2 border-blue-500 rounded-sm" />
          <label htmlFor="" className="text-lg font-semibold">Telefono</label>
          <input value={telefono} onChange={(e)=>setTelefono(e.target.value)} type="text" className="border py-2 px-2 border-blue-500 rounded-sm" />
          <label htmlFor="" className="text-lg font-semibold">Email</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" className="border py-2 px-2 border-blue-500 rounded-sm" />
          <div className="mt-10">
            <button type="submit" className="py-2 px-2 bg-blue-500 text-white transition-all hover:opacity-70">
              Solicitar informacion
            </button>
          </div>
        </form>
      </section>
      <ClientFooter/>
      <ToastContainer/>
    </section>
  );
};
