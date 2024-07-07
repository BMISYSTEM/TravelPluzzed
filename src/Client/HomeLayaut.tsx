import { HeaderLayout } from './Header/views/HeaderLayout'
import { WishlistLayout } from './Wishlist/views/WishlistLayout'
import { ClientFooter } from './Footer/ClientFooter'
import { MainActivitiesLayout } from './MainActivities/views/MainActivitiesLayout'

export const HomeLayaut = () => {
  return (
    <>
      {/* navar */}
      <HeaderLayout/>
      {/* mein */}
      <main>
        <WishlistLayout/>
        <MainActivitiesLayout/>
      </main>
      <ClientFooter/>
    </>
  )
}
