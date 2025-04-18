
import { useState } from 'react';
export interface Fotos {
    succes: Succe[];
}

export interface Succe {
    id:        number;
    url:       string;
    createdAt: Date;
    updatedAt: Date;
    tourId:    number;
}
const ImagesProducts = ({succes}:Fotos) => {

    const [visibleImagen,setVisible] = useState(0)
    const moveImagen = (operacion:number) =>{
        if(operacion === 1 ){

            if(visibleImagen < (succes?.length - 2) && succes?.length > 3 ){
                
                setVisible(visibleImagen + 1)
            }else{
                setVisible(0)
            }
        }else{
            if(visibleImagen > 0){
                setVisible(visibleImagen - 1)
            }else{
                setVisible(0)
            }
        }
    }
    return (
        <div className='relative flex flex-row mt-5'>
            <button onClick={()=>moveImagen(2)} className='absolute h-full bg-sky-900/30 backdrop-blur-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button> 
            {succes?.map((imagen,index)=>(
                <div key={index} className={`${index >= visibleImagen && index <= visibleImagen + 1 ? 'flex' : 'hidden' } w-full md:h-96 h-52 flex items-center justify-center`}>
                    <img src={`${import.meta.env.VITE_URL_BACK_IMG}${imagen.url}`} alt="" className='w-full h-full object-fill' />
                </div>
            ))} 
            <button onClick={()=>moveImagen(1)} className='absolute md:ml-[97%] ml-[89%] h-full bg-sky-900/30 backdrop-blur-sm w-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>       
        </div>
    )
}

export default ImagesProducts;