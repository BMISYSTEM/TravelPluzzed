import React, {  FormEventHandler, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { ClienteAxios } from '../../config/ClienteAxios';


interface Banner{

      id: number,
      url: string,
      descripcion: string,
      createdAt: string,
      updatedAt: string

}

export const Banner = () => {
    const [file,setFile] = useState<File | null>()
    const [banner,setBanner] = useState<Banner[]>([]);
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      console.log(files)
      if (files) {
        const fileArray = files[0]
        setFile(fileArray);
      }
      
    };
    const saveBanner = async (e:React.FormEvent) =>{
        e.preventDefault();
        try {
            if(!file) {
                toast.warning('Se requiere una imagen')
                return};
            const datos = new FormData();
            datos.append('fotos',file)
            const data = await ClienteAxios.post('/api/savebanner',datos,{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`,
                     "Content-Type": "multipart/form-data", // Este encabezado es importante para FormData
                }
            })
            getBanner()
            toast.success('Se aguardo correctamente el archivo ');
        } catch (error) {
            console.log(error)
            toast.error('Se genero un error inseperado al momento de guardar la imagen ')
        }
    }
    const getBanner = async() =>{
        try {
            const {data} = await ClienteAxios.get('/api/banner');
            console.log(data)
            setBanner(data)
        } catch (error) {
            toast.error('Error generado al consultar el banner ')            
        }
    }

    const deleteBAnner = async() =>{
        try {
            await ClienteAxios.get('/api/deletebanner',{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
            })
            setBanner([])
            getBanner()

        } catch (error) {
            toast.error('Se genero un error eliminando el banner ')
        }
    }
    useEffect(()=>{
        getBanner()
    },[])

   
  return (
    <section className='w-full flex flex-col  text-slate-200 px-5 pt-2 gap-5'>
        <h1>Banner publicitario</h1>
        <div>
            <button onClick={()=>deleteBAnner()} className='bg-red-500 py-2 px-5 rounded-sm'>
                Eliminar banner
            </button>
        </div>
        <div className='w-full h-96 bg-slate-200'>
            {banner.length > 0 ? 
                <img src={`${import.meta.env.VITE_URL_BACK_IMG}${banner?.[0]?.url}`}  alt="imagen banner " className='w-full h-full object-contain' />
            :
                <p>No hay banner para mostrar </p>
            }
        </div>
        <form encType="multipart/form-data" onSubmit={saveBanner} className='flex flex-col gap-3 '>
            <label htmlFor="">Nuevo Banner</label>
            <input type="file" onChange={handleFileChange}  />
            <div>
                <input type="submit" className='px-5 bg-green-500 py-2 rounded-sm' value={'guardar'}/>
            </div>
        </form>
    </section>
  )
}
