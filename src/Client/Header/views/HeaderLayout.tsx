import { BannerLayout } from '../Banner/views/BannerLayout';
import { ClientNav } from '../nav/ClientNav';
export const HeaderLayout = () => { 
  return (
    <header className='w-full'>
        <ClientNav/>
        <BannerLayout/>
    </header>
  )
}


