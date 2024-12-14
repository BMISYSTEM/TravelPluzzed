type tipoCampo= 'time'
interface props{
    nombre:string;
    type:tipoCampo;
    valueInput:string;
    setValue: React.Dispatch<React.SetStateAction<string | number>>
}

export const InputData = ({nombre,type,valueInput,setValue}:props) => {
  return (
    <div className="w-full max-w-full min-w-[200px] mb-2">
      <div className="relative">
        <input value={valueInput} type={type} onChange={(e)=>setValue(e.target.value)} className="peer w-full bg-transparent text-blue-700 font-bold placeholder:text-blue-500 border-blue-300 focus:border-blue-500  text-sm border  rounded-md px-3 py-3 transition duration-300 ease focus:outline-none  hover:border-slate-300 shadow-sm focus:shadow" />
        <label className={`${valueInput !== '' ? '-top-2 left-2.5 scale-90' : 'top-2.5'} absolute cursor-text bg-white px-1 left-2.5  text-blue-500 text-sm transition-all 
        transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:scale-90`}>
          {nombre}
        </label>
      </div>
    </div>
  );
};