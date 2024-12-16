
import { Link } from "react-router-dom";
// imagenes
import logo from  '../../../assets/LOGOS_TRAVEL_PUZZEL_2024-02-250x84.png'


export const ClientNav = () => {


  return (
   <>
    <nav className="h-14 bg-white flex flex-row justify-between ">
      {/* imagen logo */}
      <Link to={'/'} className="h-14 mx-5">
        <img src={logo} alt="" className="object-contain h-14"/>
      </Link>
      {/* opciones */}
      <div className="w-full h-14  flex flex-row md:gap-2 gap-1 items-center justify-end mx-5 md:text-lg text-xs">
        <Link to={'/login'} className="p-2 text text-blue-950 font-semibold hover:text-red-500 transition-all ">
          <p>Mi cuenta</p>
        </Link>
        <Link to={'/rewards'} className="p-2 text text-blue-950 font-semibold hover:text-red-500 transition-all">
          <p>Puzzle Rewards</p>
        </Link>
        <Link to={'/ayuda'} className="p-2 text text-blue-950 font-semibold hover:text-red-500 transition-all">
          <p>ayuda</p>
        </Link>
        <Link to={'/shop'} className="p-2 text text-blue-950 font-semibold hover:text-red-500 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </Link>
      </div>
    </nav>
   </>
  );
};
