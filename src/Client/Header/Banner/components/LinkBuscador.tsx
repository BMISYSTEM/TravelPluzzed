import { Link } from "react-router-dom";
import { Ciudades, Succe } from "../interface/CiudadInterface";

interface props {
  textPrimary: string;
  id:number
  textSecond: Succe[];
}

export const LinkBuscador = ({ textPrimary, textSecond ,id}: props) => {
  return (
    <div className="flex flex-col flex-item w-1/6 ">
      <Link to={`/pais/${id}`} className="text-xl font-bold text-black">{textPrimary}</Link>
      {textSecond ? 
         textSecond.map((ciudades,index)=>(
           <Link key={index} to={`/ciudad/${ciudades.id}`} className="text-sm font-bold text-slate-400">{ciudades.nombre}</Link>
        ))
      : null
      }
    </div>
  );
};
