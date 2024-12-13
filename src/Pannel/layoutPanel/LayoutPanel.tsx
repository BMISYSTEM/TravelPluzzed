import { Link, Outlet } from 'react-router-dom'
export const LayoutPanel = () => {
  return (
    <section className="w-full flex flex-row h-screen overflow-hidden bg-slate-300">
        {/* aside */}
        <aside className="w-64 h-screen bg-gray-800 text-white flex flex-col border-r border-slate-700">
            <div className="flex items-center justify-center h-16 bg-gray-900">
                <Link to={'/'} className="text-lg font-bold">Home</Link>
            </div>
            <nav className="flex-grow">
                <ul className="flex flex-col space-y-2 mt-4">
                <li>
                    <Link
                    to="/panel/destinos"
                    className="block py-2.5 px-4 rounded hover:bg-gray-700 hover:text-white transition"
                    >
                    Destinos
                    </Link>
                </li>
                <li>
                    <Link
                    to="/panel/blogs"
                    className="block py-2.5 px-4 rounded hover:bg-gray-700 hover:text-white transition"
                    >
                    Blogs
                    </Link>
                </li>
                <li>
                    <Link
                    to="/panel/fotos"
                    className="block py-2.5 px-4 rounded hover:bg-gray-700 hover:text-white transition"
                    >
                    Fotos
                    </Link>
                </li>
                <li>
                    <Link
                    to="/panel/pedidos"
                    className="block py-2.5 px-4 rounded hover:bg-gray-700 hover:text-white transition"
                    >
                    Pedidos
                    </Link>
                </li>
                <li>
                    <Link
                    to="/panel/nosotros"
                    className="block py-2.5 px-4 rounded hover:bg-gray-700 hover:text-white transition"
                    >
                    Nosotros
                    </Link>
                </li>
                <li>
                    <Link
                    to="/panel/opiniones"
                    className="block py-2.5 px-4 rounded hover:bg-gray-700 hover:text-white transition"
                    >
                    Opiniones
                    </Link>
                </li>
                <li>
                    <Link
                    to="/panel/apis"
                    className="block py-2.5 px-4 rounded hover:bg-gray-700 hover:text-white transition"
                    >
                    APIs
                    </Link>
                </li>
                </ul>
            </nav>
            <div className="p-4 bg-gray-900 text-center">
                <p className="text-sm">&copy; 2024 Travel</p>
            </div>
        </aside>
        <main className='w-full h-full bg-slate-800 overflow-auto'>
            <Outlet/>
        </main>
    </section>
  )
}