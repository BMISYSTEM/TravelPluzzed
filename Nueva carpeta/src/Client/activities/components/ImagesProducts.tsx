import { Link } from 'react-router-dom';

const ImagesProducts = () => {
    return (
        <div className='gap-2 flex flex-row'>
                <Link to={'/images'}>
                    <div className='w-96 h-96 bg-red-600 flex items-center justify-center'>
                        <p>png</p>
                    </div>
                </Link>

                <Link to={'/images'}>
                    <div className='w-96 h-96 bg-red-600 flex items-center justify-center'>
                        <p>png</p>
                    </div>
                </Link>
        </div>
    )
}

export default ImagesProducts;