
interface props {
    titulo:string,
    valor:number
}
export const ItemsConfig = (props:props) => {
    return (
        <div className="w-full flex flex-row justify-between items-center">
            <p className="text-blue-950 font-semibold">{props.titulo}</p>
            <div className="flex flex-row items-center justify-center gap-5 border border-blue-500 py-2 px-2 rounded-xl">
                <button
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
