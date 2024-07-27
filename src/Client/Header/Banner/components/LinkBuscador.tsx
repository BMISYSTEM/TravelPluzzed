import { Link } from "react-router-dom";

interface props {
  textPrimary: string;
  id:number
  textSecond: string;
}

export const LinkBuscador = ({ textPrimary, textSecond ,id}: props) => {
  return (
    <div className="flex flex-col flex-item w-1/6 ">
      <Link to={`/country/${id}`} className="text-xl font-bold text-black">{textPrimary}</Link>
      {textSecond ? 
      'ciudad'
        // textSecond.data.map((ciudades,index)=>(
        //   <Link key={index} to={`/country/${ciudades.uuid}`} className="text-sm font-bold text-slate-400">{ciudades.name}</Link>
        // ))
      : null
      }
    </div>
  );
};
