
interface props {
    titulo:string,
    valor:number,
    id:number,
    option:number,
}
export const ItemsConfig = (props:props) => {
     const updateCartQuantity = (tourId: number, key: keyof any, increment: boolean) => {
        if(key)
        {
            switch (key) {
                case 1:
                    key = "mayores_15";
                    break;
                case 2:
                    key = "de_4_15";
                    break;
                case 3:
                    key = "menores_3";
                    break;
                case 4:
                    key = "mascotas";
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
                const newValue = increment ? currentValue + 1 : Math.max(currentValue - 1, 0);
                cart[tourIndex][key] = newValue;
                // Guardar el carrito actualizado en localStorage
                localStorage.setItem("carttravel", JSON.stringify(cart));
                return newValue; // Devuelve el valor actualizado si es necesario
            } else {
                console.warn("La propiedad indicada no es numérica");
            }
        } else {
            console.warn("El tour no fue encontrado en el carrito");
        }
    };
    
    return (
        <div className="w-full flex flex-row justify-between items-center">
            <p className="text-blue-950 font-semibold">{props.titulo}</p>
            <div className="flex flex-row items-center justify-center gap-5 border border-blue-500 py-2 px-2 rounded-xl">
                <button
                onClick={()=>updateCartQuantity(props.id,props.option,true)}
                    className="w-6 text-white flex items-center justify-center rounded-full bg-green-500 hover:bg-green-800">
                    +
                </button>
                <p className="text-xl text-blue-950 ">{props.valor}</p>
                <button         
                    className="w-6 text-white flex items-center justify-center rounded-full bg-red-500 hover:bg-red-800">
                    -
                </button>
            </div>
        </div>
    )
}
