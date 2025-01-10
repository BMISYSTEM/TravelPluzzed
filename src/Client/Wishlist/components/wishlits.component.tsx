import { Link } from "react-router-dom";
import { Star } from "./star-componente";


interface props {
    IMGcarta: string;
    Nombre: string;
    Descripcion: string;
    rating: string;
    reviews: string;
    Valor: number;
    id:number;
}


export const TargetSugerence = ({IMGcarta,Nombre,Descripcion,Valor,rating,reviews,id}: props ) => {
    return (

    <Link to={'/actividades/detalle/local/'+id}>
        <div className="relative w-[25rem] md:h-[15rem] h-[25rem] flex justify-center items-center group">
            <img src={IMGcarta} alt="" className="w-full md:h-[15rem]  h-[25rem] object-fill transition duration-500 ease-in-out transform group-hover:opacity-0" />
            <div className="absolute bottom-0 w-full h-1/3 md:h-1/2 bg-white bg-opacity-75 flex flex-row  justify-between items-center ">
                <div className='flex flex-col gap-2 w-full justify-start text-red-600 p-1 '>
                  <h1 className="text-left text-xl font-bold">{Nombre}</h1>
                  <h2 className=''><span className="text-red-600 font-bold text-2xl">{rating}</span> <span className="text-sm text-slate-500">{reviews} opiniones</span> </h2>
                </div>
                
                <div className='text-red-600 w-full text-right p-1'>
                  <h3 className="text-xl font-bold text-red-600">{Number(Valor).toLocaleString('es-CO', {style: 'currency',currency: 'COP'})}</h3>
                </div>
            </div>

            <div className="absolute text-white inset-0 bg-indigo-600 opacity-0 transition duration-500 ease-in-out transform group-hover:opacity-100 flex items-start justify-center flex-col">
              <h1 className="text-2xl font-bold pl-6 ">{Nombre}</h1>
                <div className="flex flex-row pl-5 items-center justify-center">
                  <h2 className="text-4xl font-bold p-2">{Number(rating)}</h2>
                  <div className="flex flex-col p-2 text-left">
                  <div>
                      <Star number={(Number(rating))} />
                      <p><span className="text-xs font-bold">{reviews}</span> <span className="text-sm ">Opiniones</span></p>
                  </div>
                </div>
                </div>
                <div  className=" pl-6 text-xl font-bold">
                  <h4>
                    {Descripcion}
                  </h4>
                </div>
            </div>
      </div>
      
    </Link>
      

    )
    

}

