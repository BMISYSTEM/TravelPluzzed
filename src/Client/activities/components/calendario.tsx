

const Calendary = () => {

  return (
    <div className='w-96 h-96 border p-1 flex flex-col rounded-xl'>
      {/* meses  */}
      <div className='w-full p-2  flex flex-row justify-between items-center rounded-lg'>
           <button className='text-slate-500 hover:text-sky-600'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                   <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
               </svg>
           </button> 
           <p className='text-2xl font-bold text-slate-500'>Enero</p>
           <button className='text-slate-500 hover:text-sky-600'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                   <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
               </svg>
           </button>              
      </div>
      <div className="grid grid-cols-7 grid-rows-6 border w-full h-full">
        
      </div>
    </div>
  );
};



export default Calendary