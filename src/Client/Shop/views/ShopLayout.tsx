import { ClientFooter } from "../../Footer/ClientFooter"
import { ClientNav } from "../../Header/nav/ClientNav"
import TarjetaPedido from "../components/TarjetaPedido"


export const ShopLayout = () => {
  return (
    <section className="w-full h-full flex flex-col">
        <ClientNav/>
        <main className="w-full h-full flex flex-col gap-2 p-5">
            <h1 className="text-2xl text-blue-950 font-semibold">Tus pedidos</h1>
            {/* pedidos */}
            <div className="w-full flex flex-wrap p-5 gap-3">
                {/* tarjeta de pedidos */}
                <TarjetaPedido/>
                <TarjetaPedido/>
                <TarjetaPedido/>
                <TarjetaPedido/>
                <TarjetaPedido/>
            </div>
            <button className="w-full p-2 bg-blue-950 text-white text-xl font-semibold">
                Ir a pagar
            </button>
        </main>
        <ClientFooter/>
    </section>
  )
}
