import ReactModal from "react-modal";
import { InputText } from "../../Components/InputText";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { ClienteAxios } from "../../config/ClienteAxios";
import useSWR from "swr";
import { Pais, Succe } from "./interfaces/paisInterface";
import { isAxiosError } from "axios";

export const PaisLayout = () => {
  const [nombre, setNombre] = useState("");
  const [prefijo, setPrefijo] = useState("");
  const [destacado, setDestacado] = useState(false);
  const [fotos, setFotos] = useState<File>();
  const [modalNew,setModalNew] = useState(false)
  const [modalEdit,setModalEdit] = useState(false)
  const [imageEdit,setImageEdit] = useState<string>()
  const [idEdit,setIdEdit] = useState<number>()
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
          datos.append('prefijo',prefijo)
          datos.append('destacado',destacado ? '1':'0')   
          datos.append('foto',fotos)
          await toast.promise(
            ClienteAxios.post('/api/pais/create',datos,{
              headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "multipart/form-data",
              }
            })
            ,
            {
              error:'Se genero un error inesperado, contacte con soporte',
              pending:'Creando el pais',
              success:'Pais creado con exito'
            }
          )

        }
        setFotos(undefined)
        mutate()
    } catch (error) {
        toast.error('Error inesperado en el servidor')
    }
  }
  const deleteId = async(id:number) =>{
    try {
      await ClienteAxios.delete('/api/pais/delete/'+id,{
        headers:{
          Authorization:`Bearer ${localStorage.getItem('token')}`
        }
      })
      toast.success('Pais eliminado con exito...')
      mutate()
    } catch (error) {
      toast.error('Error generado al eliminar el item')
    }
  }

  const editElement = async(pais:Succe) =>{
      setModalEdit(true)
      setIdEdit(pais.id)
      setNombre(pais.nombre)
      setPrefijo(pais.prefijo.toString())
      setDestacado(pais.destacado ? true : false)
      setImageEdit(pais.imagen)
  }
  const handleClickEdit = async(e:React.FormEvent) =>{
    e.preventDefault()
    try {
      if(!fotos)
        {
          const datos = {
            nombre: nombre,
            prefijo: prefijo,
            destacado: destacado ? '1' : '0'
          };
          const {} = await ClienteAxios.put('/api/pais/update/'+idEdit,datos,{
            headers:{
              Authorization:`Bearer ${localStorage.getItem('token')}`,
            }
          })
          toast.success('Pais actualizado con exito')
          mutate()
          setModalEdit(false)
        }
    } catch (error) {
      if(isAxiosError(error)){
        toast.error('Error inesperado en el servidor' + error.message)
      }else{
        toast.error('Error inesperado en el servidor')
      }
    }
  }

  const handleEditImage = async(event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    try {
      const datos = new FormData();
      datos.append("foto", file as Blob);
      await ClienteAxios.put("/api/pais/updateImage/" + idEdit, datos, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });
      mutate()
      toast.success('Imagen actualizada con exito')
      setModalEdit(false)
    } catch (error) {
      if(isAxiosError(error)){
        toast.error('Error inesperado en el servidor' + error.message)
    }else{
      toast.error('Error inesperado en el servidor')
    }
  };
}
  const {data,mutate} = useSWR('/api/pais/index',()=>
  ClienteAxios.get('/api/pais/index'))
  const allPais:Pais = data?.data

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
            <th className="py-2 px-4">Prefijo</th>
            <th className="py-2 px-4">Imagen</th>
            <th className="py-2 px-4">Destacado</th>
            <th className="py-2 px-4">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {allPais?.succes?.map((pais,index)=>(
            <tr key={index} className="border-b border-gray-600">
              <td className="py-2 px-4">{pais.id}</td>
              <td className="py-2 px-4">{pais.nombre}</td>
              <td className="py-2 px-4">{pais.prefijo}</td>
              <td className="py-2 px-4">
                <div>
                  <img src={`${import.meta.env.VITE_URL_BACK_IMG}${pais.imagen}`} alt="" className="w-20" />
                </div>
              </td>
              <td className="py-2 px-4">{pais.destacado ? 'Si' : 'No'}</td>
              <td className="py-2 px-4 flex space-x-2">
                <button
                  onClick={() =>deleteId(pais.id)}
                  className="bg-red-500 hover:bg-red-800 text-white font-bold py-1 px-2 rounded transition"
                >
                  Eliminar
                </button>
                <button
                  onClick={() =>{
                    editElement(pais)}}
                  className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-1 px-2 rounded transition"
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* editar pais */}
      <ReactModal isOpen={modalEdit} className={"w-full h-full flex  justify-center items-center backdrop-blur-sm"}>
          <section className="w-1/2  bg-slate-800 p-2 flex flex-col gap-5  rounded-xl">
            <div>
              <button onClick={()=>setModalEdit(false)} className="py-1 px-3 bg-red-500 hover:bg-red-800 text-white rounded-xl">
                Cerrar
              </button>
            </div>
            <form onSubmit={handleClickEdit} action="" encType="multipart/form-data" className="w-full flex flex-col gap-5 text-slate-200">
              <InputText nombre="Nombre del pais" setValue={setNombre} valueInput={nombre} type="text" />
              <InputText nombre="Prefijo del pais" setValue={setPrefijo} valueInput={prefijo} type="text" />
              <div className="flex flex-col gap-2 text-white items-center justify-center">
                <label htmlFor="">Destacado</label>
                <input type="checkbox" checked={destacado}  onChange={()=>setDestacado(!destacado)} />
              </div>
              <div className="">
                <img src={import.meta.env.VITE_URL_BACK_IMG + imageEdit} alt="" className="w-40" />
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleEditImage}
                className="mb-4"
              />
              <button className="py-1 px-3 bg-green-500 text-white rounded-xl hover:bg-green-800 transition-all">
                Guardar cambios
              </button>
            </form>
          </section>
      </ReactModal>
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
            <InputText
              nombre="Nombre del pais"
              setValue={setNombre}
              valueInput={nombre}
              type="text"
            />
            <InputText
              nombre="Prefijo del pais"
              setValue={setPrefijo}
              valueInput={prefijo}
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
