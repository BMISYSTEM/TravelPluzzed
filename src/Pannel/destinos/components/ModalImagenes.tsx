import React, { useEffect, useState } from "react";
import { ClienteAxios } from "../../../config/ClienteAxios";
import { AllImagenes } from "../interfaces/allImagenes";
import { toast } from "react-toastify";

interface props {
  id: number;
}
export const ModalImagenes = ({ id }: props) => {
    const [allImagenes,setAllImagenes] = useState<AllImagenes>()
    const [cargando,setCargando] = useState(false)
    const [fotos, setFotos] = useState<File[]>([]);
    const consultaImagenes = async()=>{
        setCargando(true)
        const {data} = await ClienteAxios.get('/api/tour/imagenes/'+id,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
        setAllImagenes(data)
        setCargando(false)
    }

    const deleteImagen = async(id:number) =>{
        try {
            await toast.promise(
                ClienteAxios.delete('/api/tour/deleteimagen/'+id,{
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem('token')}`
                    }
                })
                ,
                {
                    error:'Se genero un error contacte a soporte',
                    pending:'Se esta eliminando la imagen...',
                    success:'Imagen eliminada'
                }
            )
            consultaImagenes()
        } catch (error) {
            toast.error('Error inesperado al eliminar imagen, contacte con soporte')
        }
    }
     const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
          const fileArray = Array.from(files);
          if (fileArray.length > 20) {
            alert('Puedes seleccionar hasta 20 imágenes.');
            return;
          }
          setFotos(fileArray);
        }
        
      };

    const saveImagen = async(e:React.FormEvent) =>{
        e.preventDefault()
        if(fotos.length <= 0 )
        {
            toast.error('No se ha seleccionado fotos para guardar...')
            return
        }
        const datos = new FormData()
        datos.append('id',id.toString())
        if (fotos) {
            for (let i = 0; i < fotos.length; i++) {
              datos.append('fotos', fotos[i]);
            }
          }
        try {
            toast.success('Guardando imagen')
            const {} = await ClienteAxios.post('/api/tour/saveimagen',datos,{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`,
                    "Content-Type": "multipart/form-data",
                }
            })
            toast.success('Imagen Almacenda con exito')
            consultaImagenes()
        } catch (error) {
            toast.error('Se genero un error contacte con soporte')
        }
        finally{
            setFotos([])
        }
    }
    useEffect(()=>{
        consultaImagenes()
    },[])

  return (
    <div className="w-full h-full flex flex-col">
        {cargando ? 
            <p className="text-xl font-semibold animate-pulse">Cargando Imagenes...</p>
        : null}
        <div className="w-full h-full flex flex-wrap gap-2 overflow-auto">
            {allImagenes?.imagenes.map((img,index)=>(
                <div key={index} className="flex flex-col p-2 h-auto">
                    <img src={`${import.meta.env.VITE_URL_BACK_IMG}${img.url}`} alt="" className="w-40 h-40 object-contain" />
                    <button onClick={()=>deleteImagen(img.id)} className="py-1 px-3 bg-red-500 rounded-xl text-white hover:bg-red-800">
                        Eliminar
                    </button>
                </div>
            ))}
        </div>
        <form action="" onSubmit={saveImagen} encType="multipart/form-data">
        <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="mb-4"
            />

            <p className="text-sm text-gray-500 mb-2">
              Máximo 20 fotos seleccionadas. Seleccionadas: {fotos.length}
            </p>

        <button type="submit" className="py-1 px-3 bg-green-500 text-white hover:bg-green-800 transition-all">Guardar Fotos</button>
        </form>
    </div>
  );
};
