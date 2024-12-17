import ReactModal from "react-modal";
import { InputText } from "../../Components/InputText";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { ClienteAxios } from "../../config/ClienteAxios";
import useSWR from "swr";
import { Pais } from "../Pais/interfaces/paisInterface";
import { Ciudades } from "./interfaces/ciudadesInterface";


export const CiudadesLayout = () => {
  const [nombre, setNombre] = useState("");
  const [prefijo, setPrefijo] = useState("");
  const [destacado, setDestacado] = useState(false);
  const [fotos, setFotos] = useState<File>();
  const [modalNew,setModalNew] = useState(false)
  const [paisSelect,setPaisSelect] = useState(0)
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      
      setFotos(file);
    }
  };

  const createPais = async(e:React.FormEvent) =>{
    e.preventDefault()
    try {
        if(fotos)
        {
          const datos = new FormData()
          datos.append('nombre',nombre)
          datos.append('pais',paisSelect.toString())
          datos.append('destacado',destacado ? '1':'0')   
          datos.append('foto',fotos)
          await toast.promise(
            ClienteAxios.post('/api/ciudades/create',datos,{
              headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "multipart/form-data",
              }
            })
            ,
            {
              error:'Se genero un error inesperado, contacte con soporte',
              pending:'Creando el Ciudad',
              success:'Ciudad creado con exito'
            }
          )

        }
        /* mutate() */
        mutateCiudades()
    } catch (error) {
        toast.error('Error inesperado en el servidor')
    }
  }
  const deleteId = async(id:number) =>{
    try {
      await ClienteAxios.delete('/api/ciudades/delete/'+id,{
        headers:{
          Authorization:`Bearer ${localStorage.getItem('token')}`
        }
      })
      toast.success('Ciudad eliminado con exito...')
      /* mutate() */
      mutateCiudades()
    } catch (error) {
      toast.error('Error generado al eliminar el item')
    }
  }
    const {data,mutate} = useSWR('/api/pais/index',()=>
    ClienteAxios.get('/api/pais/index'))
    const allPais:Pais = data?.data
    const {data:ciudades,mutate:mutateCiudades} = useSWR('/api/ciudades/index',()=>
    ClienteAxios.get('/api/ciudades/index'))
    const allciudades:Ciudades = ciudades?.data

  return (
    <section className="w-full flex flex-col gap-2 p-2">
      <div>
        <button onClick={()=>setModalNew(true)} className="py-1 px-3 rounded-xl bg-green-500 hover:bg-green-800 text-white">
          Nuevo
        </button>
      </div>
      <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden text-slate-100">
        <thead>
          <tr className="text-left border-b border-gray-600 text-white">
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Nombre</th>
            <th className="py-2 px-4">Pais</th>
            <th className="py-2 px-4">Imagen</th>
            <th className="py-2 px-4">Destacado</th>
            <th className="py-2 px-4">Acciones</th>
          </tr>
        </thead>
        <tbody>
            {allciudades?.succes?.map((ciudad,index)=>(
                <tr key={index} className="border-b border-gray-600">
                <td className="py-2 px-4">{ciudad.id}</td>
                <td className="py-2 px-4">{ciudad.nombre}</td>
                <td className="py-2 px-4">{ciudad.pais}</td>
                <td className="py-2 px-4">
                    <div>
                    <img src={`${import.meta.env.VITE_URL_BACK}/${ciudad.imagen}`} alt="" className="w-20" />
                    </div>
                </td>
                <td className="py-2 px-4">{ciudad.destacado ? 'Si' : 'No'}</td>
                <td className="py-2 px-4 flex space-x-2">
                    <button
                    onClick={() =>deleteId(ciudad.id)}
                    className="bg-red-500 hover:bg-red-800 text-white font-bold py-1 px-2 rounded transition"
                    >
                    Eliminar
                    </button>
                    <button
                    onClick={() => {}}
                    className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-1 px-2 rounded transition"
                    >
                    Editar
                    </button>
                </td>
                </tr>
            ))}
        </tbody>
      </table>
      <ReactModal
        isOpen={modalNew}
        className={
          "w-full h-full flex  justify-center items-center backdrop-blur-sm"
        }
      >
        <section className="w-1/2  bg-slate-800 p-2 flex flex-col gap-5  rounded-xl">
          <div className="w-full flex flex-row justify-end">
            <button onClick={()=>setModalNew(false)} className="py-1 px-3 bg-red-500 hover:bg-red-800 text-white rounded-xl">
              Cerrar
            </button>
          </div>
          <form action="" encType="multipart/form-data" onSubmit={createPais} className="w-full flex flex-col gap-5 text-slate-200">
            <label htmlFor="">Paises</label>
            <select name="" id="" className="border bg-slate-800 py-1 " onChange={(e)=>setPaisSelect(Number(e.target.value))}>
                <option value="0" selected>Seleccione el pais</option>
                {allPais?.succes?.map((pais,index)=>(
                    <option key={index} value={pais.id}>{pais.nombre}</option>
                ))}
            </select>
            <InputText
              nombre="Nombre de la ciudad"
              setValue={setNombre}
              valueInput={nombre}
              type="text"
            />
            <div className="flex flex-col gap-2 text-white items-center justify-center">
              <label htmlFor="">Destacado</label>
              <input
                type="checkbox"
                checked={destacado}
                onChange={() => setDestacado(!destacado)}
              />
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mb-4"
            />
            <button className="py-1 px-3 bg-green-500 text-white rounded-xl hover:bg-green-800 transition-all">
              Guardar
            </button>
          </form>
        </section>
      </ReactModal>
    </section>
  );
};
