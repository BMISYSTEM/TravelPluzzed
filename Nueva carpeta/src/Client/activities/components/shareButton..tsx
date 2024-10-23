import { useState } from 'react';
import { share } from '../assets/share.tsx';
import facebookSvg from '../assets/facebookSvg.svg';
import Xt from '../assets/X(twitter).svg';
import Linkedin from '../assets/linkedin.svg';
import impresion from '../assets/impresora.svg';
import 'animate.css'


const ShareButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative p-2">
            <div
                onClick={toggleDropdown}
                className="text-red-500 flex flex-row gap-2 px-4 justify-end group cursor-pointer"
            >
                <p className='group-hover:text-red-500'> Compartir</p>
                <span dangerouslySetInnerHTML={{ __html: share }} className='text-black group-hover:text-red-500'></span>
            </div>

            {isOpen && (
                <div className="animate__animated animate__fadeInRight animate__delay-0.001s absolute right-0 mt-2 w-34 bg-white border border-gray-300 shadow-lg rounded-lg z-50">
                    <button className='flex flex-row gap-2 items-center justify-center w-full px-4 py-2 hover:bg-gray-100'>
                        <p className='text-black hover:text-red-500'>Facebook</p>
                        <img src={facebookSvg} className='w-6' alt="Facebook" />
                    </button>

                    <button className='flex flex-row gap-2 items-center justify-center w-full px-4 py-2 hover:bg-gray-100'>
                        <p className='text-black hover:text-red-500'>X (Twitter)</p>
                        <img src={Xt} className='w-6' alt="X (Twitter)" />
                    </button>

                    <button className='flex flex-row gap-2 items-center justify-center w-full px-4 py-2 hover:bg-gray-100'>
                        <p className='text-black hover:text-red-500'>LinkedIn</p>
                        <img src={Linkedin} className='w-6' alt="LinkedIn" />
                    </button>

                    <button className='flex flex-row gap-2 items-center justify-center w-full px-4 py-2 hover:bg-gray-100'>
                        <p className='text-black hover:text-red-500'>Imprimir</p>
                        <img src={impresion} className='w-6' alt="Imprimir" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ShareButton;
