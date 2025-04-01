import { useEffect, useState } from "react";
import { ClientFooter } from "../../Footer/ClientFooter";
import { ClientNav } from "../../Header/nav/ClientNav";
import { Cart } from "../interface/carrito";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import { ClienteAxios } from "../../../config/ClienteAxios";
import { toast, ToastContainer } from "react-toastify";
import { Order } from "../interface/respuestaOrder";

export const ShopLayout = () => {
  const [pedidos, setPedidos] = useState<Cart[] | undefined>();
  const [pago,setPago] = useState(false)
  const [_,setRespuesta] = useState<Order>()
  /* inputs  */
  const [nombre,setNombre] = useState('')
  const [apellido,setApellido] = useState('')
  const [nit,setNit] = useState('')
  const [email,setEmail] = useState('')
  const [direccion,setDireccion] = useState('')
  const [telefono,setTelefono] = useState(0)
  const [telefonoRespaldo,setTelefonoRespaldo] = useState(0)
  const [comentario,setComentario] = useState('')
  const cargarPedidos = () => {
    const pedidos = JSON.parse(localStorage.getItem("carttravel") || "[]");
    setPedidos(pedidos);
  };

  const updateCartQuantity = (
    tourId: number,
    key: keyof any,
    increment: boolean
  ) => {
    let factor = 0;
    if (key) {
      switch (key) {
        case 1:
          key = "mayores_15";
          factor = 1;
          break;
        case 2:
          key = "de_4_15";
          factor = 0.6;
          break;
        case 3:
          key = "menores_3";
          factor = 0;
          break;
        case 4:
          key = "mascotas";
          factor = 0.2;
          break;
        default:
          break;
      }
    }
    // Recuperar el carrito del localStorage
    const cartString = localStorage.getItem("carttravel");
    const cart = cartString ? JSON.parse(cartString) : [];
    // Buscar el tour correspondiente en el carrito
    const tourIndex = cart.findIndex((item: any) => item.tour_id === tourId);
    if (tourIndex !== -1) {
      // Actualizar el valor de la propiedad (incremento o decremento)
      const currentValue = cart[tourIndex][key];
      if (typeof currentValue === "number") {
        const newValue = increment
          ? currentValue + 1
          : Math.max(currentValue - 1, 0);
        cart[tourIndex][key] = newValue;

        cart[tourIndex].precio_total = increment
          ? cart[tourIndex].precio_total +
            (factor === 1
              ? cart[tourIndex].precio
              : factor === 0.6
              ? cart[tourIndex].precio * 0.6
              : factor === 0.2
              ? cart[tourIndex].precio * 0.2
              : 0)
          : cart[tourIndex].precio_total -
            (factor === 1
              ? cart[tourIndex].precio
              : factor === 0.6
              ? cart[tourIndex].precio * 0.6
              : factor === 0.2
              ? cart[tourIndex].precio * 0.2
              : 0);
        // Guardar el carrito actualizado en localStorage
        localStorage.setItem("carttravel", JSON.stringify(cart));
        cargarPedidos();
        return newValue; // Devuelve el valor actualizado si es necesario
      } else {
        console.warn("La propiedad indicada no es numérica");
      }
    } else {
      console.warn("El tour no fue encontrado en el carrito");
    }
  };

  const deleteItem = async (id: number) => {
    const newLocalStorage = pedidos?.filter((pedido) => pedido.tour_id !== id);
    localStorage.setItem("carttravel", JSON.stringify(newLocalStorage));
    cargarPedidos();
  };
  const totalPago = pedidos?.reduce((sum, item) => sum + item.precio_total, 0);
  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await toast.promise(generatePedido(),{
      error:'Se genero un error al crear el pedido',
      pending:'Creando el pedido espere porfavor...',
      success:'Pedido creado correctamente, sera redireccionado para realizar el pago'
    })
    
  };

  const generatePedido = async() =>{
    const datos = {
      pedidos,
      nombre,
      apellido,
      email,
      telefono,
      telefonoRespaldo,
      direccion,
      comentario,
      nit,
      valor_total:totalPago
    }
    const {data} = await ClienteAxios.post('/api/compra/create',datos)
    setRespuesta(data)
    /* console.log(data?.succes?.links?.[1]?.href) */
    if(data?.succes?.links?.[1]?.href){
      window.open(data?.succes?.links?.[1]?.href, "_blank");
    }else{
      toast.error('No fue posible redireccionar para el pago,verifique que tenga habilitadas las ventanas emergentes')
    }
  }
  useEffect(() => {
    cargarPedidos();
  }, []);
  return (
    <section className="w-full h-full flex flex-col">
      <ClientNav />
      <main className="w-full h-full flex flex-col gap-2 p-5">
        <h1 className="text-2xl text-blue-950 font-semibold">Tus pedidos</h1>
        {/* pedidos */}
        <div className="w-full flex flex-wrap p-5 gap-3 justify-center">
          {/* tarjeta de pedidos */}
          {pedidos?.map((pedido, index: number) => (
            <div
              key={index}
              className="w-96 h-auto bg-slate-200 flex flex-col gap-1 p-2 rounded-sm border hover:border-blue-950 transition-all"
            >
              {/* imagen */}
              <div className="w-full h-52 ">
                <img
                  src={import.meta.env.VITE_URL_BACK_IMG + pedido.imagen}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              {/* infromacion del paquete */}
              <div className="w-full flex flex-col gap-1">
                <p className="text-xl font-semibold text-blue-950">
                  {" "}
                  {pedido.nombre}
                </p>
                <p className="text-sm font-semibold text-blue-950">
                  Fecha y Hora seleccionado: {pedido.dia}
                </p>
                {/* items */}
                <div className="w-full flex flex-row justify-between items-center">
                  <p className="text-blue-950 font-semibold">
                    {"Adultos mayores de 15 años"}
                  </p>
                  <div className="flex flex-row items-center justify-center gap-5 border border-blue-500 py-2 px-2 rounded-xl">
                    <button
                      onClick={() =>
                        updateCartQuantity(pedido.tour_id, 1, true)
                      }
                      className="w-6 text-white flex items-center justify-center rounded-full bg-green-500 hover:bg-green-800"
                    >
                      +
                    </button>
                    <p className="text-xl text-blue-950 ">
                      {pedido.mayores_15}
                    </p>
                    <button
                      onClick={() =>
                        updateCartQuantity(pedido.tour_id, 1, false)
                      }
                      className="w-6 text-white flex items-center justify-center rounded-full bg-red-500 hover:bg-red-800"
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                  <p className="text-blue-950 font-semibold">
                    {"Niños menores de 15 a 4 años"}
                  </p>
                  <div className="flex flex-row items-center justify-center gap-5 border border-blue-500 py-2 px-2 rounded-xl">
                    <button
                      onClick={() =>
                        updateCartQuantity(pedido.tour_id, 2, true)
                      }
                      className="w-6 text-white flex items-center justify-center rounded-full bg-green-500 hover:bg-green-800"
                    >
                      +
                    </button>
                    <p className="text-xl text-blue-950 ">{pedido.de_4_15}</p>
                    <button
                      onClick={() =>
                        updateCartQuantity(pedido.tour_id, 2, false)
                      }
                      className="w-6 text-white flex items-center justify-center rounded-full bg-red-500 hover:bg-red-800"
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                  <p className="text-blue-950 font-semibold">
                    {"Niños menores de 3 años "}
                  </p>
                  <div className="flex flex-row items-center justify-center gap-5 border border-blue-500 py-2 px-2 rounded-xl">
                    <button
                      onClick={() =>
                        updateCartQuantity(pedido.tour_id, 3, true)
                      }
                      className="w-6 text-white flex items-center justify-center rounded-full bg-green-500 hover:bg-green-800"
                    >
                      +
                    </button>
                    <p className="text-xl text-blue-950 ">{pedido.menores_3}</p>
                    <button
                      onClick={() =>
                        updateCartQuantity(pedido.tour_id, 3, false)
                      }
                      className="w-6 text-white flex items-center justify-center rounded-full bg-red-500 hover:bg-red-800"
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                  <p className="text-blue-950 font-semibold">
                    {"Numero de mascotas"}
                  </p>
                  <div className="flex flex-row items-center justify-center gap-5 border border-blue-500 py-2 px-2 rounded-xl">
                    <button
                      onClick={() =>
                        updateCartQuantity(pedido.tour_id, 4, true)
                      }
                      className="w-6 text-white flex items-center justify-center rounded-full bg-green-500 hover:bg-green-800"
                    >
                      +
                    </button>
                    <p className="text-xl text-blue-950 ">{pedido.mascotas}</p>
                    <button
                      onClick={() =>
                        updateCartQuantity(pedido.tour_id, 4, false)
                      }
                      className="w-6 text-white flex items-center justify-center rounded-full bg-red-500 hover:bg-red-800"
                    >
                      -
                    </button>
                  </div>
                </div>
                {/* <ItemsConfig titulo="Adultos mayores de 15 años" valor={pedido.mayores_15} id={pedido.tour_id} option={1} />
                                          <ItemsConfig titulo="Niños menores de 15 a 4 años" valor={pedido.de_4_15} id={id} option={2}/>
                                          <ItemsConfig titulo="Niños menores de 3 años " valor={pedido.menores_3} id={id} option={3}/>
                                          <ItemsConfig titulo="Numero de mascotas" valor={pedido.mascotas} id={id} option={4}/> */}
                <p className="text-lg font-semibold text-blue-950">
                  Valor Total USD {pedido.precio_total}
                </p>
                <div className="w-full flex flex-row justify-center gap-5">
                  <button
                    onClick={() => deleteItem(pedido.tour_id)}
                    className="bg-red-500 text-white p-2 rounded-sm"
                  >
                    Eliminar
                  </button>
                  <Link
                    to={`/actividades/detalle/local/${pedido.tour_id}`}
                    className="bg-blue-950 text-white p-2 rounded-sm"
                  >
                    Ver detalle del tour
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={()=>setPago(true)} className="w-full p-2 bg-blue-950 text-white text-xl font-semibold">
          Ir a pagar ${totalPago}
        </button>
      </main>
      <ClientFooter />
      <ReactModal
        isOpen={pago}
        className={
          "w-full h-full bg-black/20 flex items-center justify-center p-2"
        }
      >
        <section className="w-full md:w-1/3 bg-white h-full flex flex-col gap-2 overflow-auto">
          <div className="w-full flex flex-row justify-end p-2">
            <button onClick={()=>setPago(false)} className="text-sm py-1 px-3 rounded-xl bg-red-500 text-white transition-all hover:opacity-70">
              Cancelar
            </button>
          </div>
          <div className="w-full max-w-md mx-auto  rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre
                </label>
                <input
                  value={nombre}
                  onChange={(e)=>setNombre(e.target.value)}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Eje: Arturo"
                  required
                  className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Apellido
                </label>
                <input
                  value={apellido}
                  onChange={(e)=>setApellido(e.target.value)}
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Ejemplo: Ledesma Mendez"
                  required
                  className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="id"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cédula o NIT
                </label>
                <input
                  value={nit}
                  onChange={(e)=>setNit(e.target.value)}
                  type="number"
                  id="id"
                  name="id"
                  placeholder="Ejemplo: 5547795731"
                  required
                  className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ejemplo: arturomendez@gmail.com"
                  required
                  className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  
                  className="block text-sm font-medium text-gray-700"
                >
                  Teléfono
                </label>
                <input
                  value={telefono}
                  onChange={(e)=>setTelefono(Number(e.target.value))}
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Ejemplo: +573185573695"
                  required
                  className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="phone2"
                  className="block text-sm font-medium text-gray-700"
                >
                  Teléfono 2
                </label>
                <input
                  value={telefonoRespaldo}
                  onChange={(e)=>setTelefonoRespaldo(Number(e.target.value))}
                  type="tel"
                  id="phone2"
                  placeholder="Ejemplo: +573185998695"
                  name="phone2"
                  className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Dirección
                </label>
                <input
                value={direccion}
                onChange={(e)=>setDireccion(e.target.value)}
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Ejemplo: Av. Insurgentes Sur 300, Colonia Roma Norte, "
                  required
                  className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium text-gray-700"
                >
                  Comentario
                </label>
                <textarea
                value={comentario}
                onChange={(e)=>setComentario(e.target.value)}
                  id="comment"
                  name="comment"
                  placeholder="Av. Insurgentes Sur 300, 
                  Colonia Roma Norte, 
                  06700 Ciudad de México, 
                  Alcaldía Cuauhtémoc, 
                  CDMX, 
                  México"
                  rows={3}
                  className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </section>
      </ReactModal>
      <ToastContainer/>
    </section>
  );
};
