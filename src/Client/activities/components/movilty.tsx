import {heart} from '../assets/heart'

const ButtonMovility = () => {
    return (
        
    <div className='bg-white pl-12 w-full flex flex-row justify-between sticky top-0'>

        <div className='text-gray-500  text-xm flex flex-row gap-8 pt-2 items-end'>

            <div className='flex flex-col gap-2 group'>
                <a href="#descripcion" className='group-hover:text-red-500'>Descripcion</a>
                <div className='bg-transparent group-hover:bg-red-500 rounded full py-1'></div>
            </div>

            <div className='flex flex-col gap-2 group'>
                <a href='#detalles' className='group-hover:text-red-500'>Detalles</a>
                <div className='bg-transparent group-hover:bg-red-500 rounded full py-1'></div>
            </div>

            <div className='flex flex-col gap-2 group'>
                <a href='#cancelaciones' className='group-hover:text-red-500'>Cancelaciones</a>
                <div className='bg-transparent group-hover:bg-red-500 rounded full py-1'></div>
            </div>  

            <div className='flex flex-col gap-2 group'>
                <a href='#opiniones' className='group-hover:text-red-500'>Opiniones</a>
                <div className='bg-transparent group-hover:bg-red-500 rounded full py-1'></div>
            </div>
        </div>

        {/* button of save your favorite */}
        <button className='p-4 pr-12 flex flex-row gap-2 items-start group'>
            <p className='text-red-500'>Favoritos</p>
            <span dangerouslySetInnerHTML={{ __html:heart}} className='group-hover:text-red-500 text-black'></span>
        </button>

    </div>
    )
} 

export default ButtonMovility