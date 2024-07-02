import { HeaderLayout } from './Header/views/HeaderLayout'
import { WishlistLayout } from './Wishlist/views/WishlistLayout'

export const HomeLayaut = () => {
  return (
    <>
      {/* navar */}
      <HeaderLayout/>
      {/* mein */}
      <main>
        <WishlistLayout/>
      </main>
      {/* footer */}
    </>
  )
}
