import { HeaderLayout } from "./Header/views/HeaderLayout";
import { WishlistLayout } from "./Wishlist/views/WishlistLayout";
import { ClientFooter } from "./Footer/ClientFooter";
import { MainActivitiesLayout } from "./MainActivities/views/MainActivitiesLayout";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const HomeLayaut = () => {
  const [bannerInicial, setBannerInicial] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setBannerInicial(true);
    }, 3000);
  }, []);
  return (
    <>
      <Link
        to={
          "https://wa.me/5215548538822?text=Hola%2C%20me%20gustaría%20más%20información"
        }
        className="fixed w-16 h-16  z-[9999] right-5 top-[50%]"
      >
        <img src="./whatsapp.png" className="w-full h-full object-contain" />
      </Link>
      {bannerInicial ? (
        <section
          onClick={() => setBannerInicial(false)}
          className={
            "w-full fixed h-screen flex flex-row items-center justify-center  bg-black/50 z-[40]"
          }
        >
          <div className="w-[50rem] h-[30rem] bg-white "></div>
        </section>
      ) : null}
      {/* navar */}
      <HeaderLayout />
      {/* mein */}
      <main>
        <WishlistLayout />
        <MainActivitiesLayout />
      </main>
      <ClientFooter />
    </>
  );
};
