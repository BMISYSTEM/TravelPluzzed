import { HeaderLayout } from './Header/views/HeaderLayout'
import { WishlistLayout } from './Wishlist/views/WishlistLayout'
import { ClientFooter } from './Footer/ClientFooter'

export const HomeLayaut = () => {
  return (
    <>
      {/* navar */}
      <HeaderLayout/>
      {/* mein */}
      <main>
        <WishlistLayout/>
      </main>
      <ClientFooter/>
    </>
  )
}
