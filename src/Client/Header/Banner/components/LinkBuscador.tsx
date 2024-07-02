import { Link } from "react-router-dom";

interface props {
  textPrimary: string;
  textSecond: string;
}

export const LinkBuscador = ({ textPrimary, textSecond }: props) => {
  return (
    <div className="flex flex-col ">
      <Link to={`/sheart/${textPrimary.toLocaleLowerCase()}`} className="text-xl font-bold text-black">{textPrimary}</Link>
      <Link to={`/sheart/${textSecond.toLocaleLowerCase()}`} className="text-sm font-bold text-slate-400">{textSecond}</Link>
    </div>
  );
};
