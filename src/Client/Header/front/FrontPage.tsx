import { HomeIcon } from "@heroicons/react/20/solid";

interface Props {
  name: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
}
const ServicesList: Props[] = [
  {
    name: "Viajes",
    icon: HomeIcon,
  },
  {
    name: "Hoteles",
    icon: HomeIcon,
  },
  {
    name: "Vuelos",
    icon: HomeIcon,
  },
];

export const FrontPage = () => {
  return (
    <>
      <header className="bg-[url('src/assets/font_page.jpg')] bg-cover py-20 mt-1">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 h-[600px]">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl text-gray-500">
            Travel Puzzle
          </h1>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-3xl text-gray-500">
            ¡Armamos tu Viaje!
          </h2>
          <p className="mb-8 text-lg font-normal  lg:text-2xl sm:px-16 lg:text-xl sm:px-16 lg:px-48 text-gray-500">
            ¡Descubre experiencias únicas en los mejores destinos, con
            itinerarios personalizados y guías en español.
          </p>
          <div className="w-full">
            <form className="max-w-md mx-auto">
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="¿Cuál es tu destino?"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Buscar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full flex justify-center space-x-4">
          {ServicesList.map((item) => (
            <div key={item.name} className="flex items-center space-x-4">
              <item.icon className="size-14 text-gray-900 " />
              <p className="text-gray-900 text-4xl">{item.name}</p>
            </div>
          ))}
        </div>
      </header>
    </>
  );
};
