import LogoFooter from  '../../assets/footer.gif';


type  LinkFooter = {
    name: string
    link: string
}
const listLinkFooter : LinkFooter[] = [
  {
    "name": "Nosotros",
    "link": "https://ejemplo.com/nosotros"
  },
  {
    "name": "Contacto",
    "link": "https://ejemplo.com/contacto"
  },
  {
    "name": "Servicio al cliente",
    "link": "https://ejemplo.com/servicio-al-cliente"
  },
  {
    "name": "Preguntas Frecuentes",
    "link": "https://ejemplo.com/preguntas-frecuentes"
  },
  {
    "name": "Puntos de venta Torres Boudica",
    "link": "https://ejemplo.com/puntos-de-venta/torres-boudica"
  },
  {
    "name": "Puntos de venta Durango",
    "link": "https://ejemplo.com/puntos-de-venta/durango"
  },
  {
    "name": "Términos y condiciones",
    "link": "https://ejemplo.com/terminos-y-condiciones"
  },
  {
    "name": "Política de tratamiento de datos",
    "link": "https://ejemplo.com/politica-de-tratamiento-de-datos"
  },
  {
    "name": "PROFECO",
    "link": "https://ejemplo.com/profeco"
  }

];

const listLinkExpress : LinkFooter[] = [
    {
      "name": "Destinos",
      "link": "https://ejemplo.com/destinos"
    },
    {
      "name": "Transporte",
      "link": "https://ejemplo.com/transporte"
    },
    {
      "name": "Experiencias",
      "link": "https://ejemplo.com/experiencias"
    },
    {
      "name": "Travel Puzzle Rewards",
      "link": "https://ejemplo.com/travel-puzzle-rewards"
    },
    {
      "name": "Comunidad Travel Puzzle",
      "link": "https://ejemplo.com/comunidad-travel-puzzle"
    },
    {
      "name": "Ser Partner de Travel Puzzle",
      "link": "https://ejemplo.com/ser-partner-de-travel-puzzle"
    },
    {
      "name": "Armar mi viaje",
      "link": "https://ejemplo.com/armar-mi-viaje"
    },
    {
      "name": "Mi cuenta",
      "link": "https://ejemplo.com/mi-cuenta"
    }
  ];  
  

export const ClientFooter = () => {
    return (
       

<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full  p-4 py-6 lg:py-8">
        <div className="md:flex  md:justify-around">
          <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                  <img src={LogoFooter} className="h-50" alt="Travel Puzzle footer" />
              </a>
          </div>
          <div className="grid grid-cols-1  gap-8 sm:gap-20 sm:grid-cols-2">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">My Travel Puzzle</h2>
                  <ul className="text-white  font-medium ml-4">
                      {listLinkFooter.map((link) => (
                        <li className="mb-4" key={link.name}>
                            <a href={link.link} className="hover:underline">{link.name}</a>
                        </li>
                      ))}
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul className="text-white font-medium ml-4">
                     {listLinkExpress.map((link) => (
                        <li className="mb-4" key={link.name}>
                            <a href={link.link} className="hover:underline">{link.name}</a>
                        </li>
                      ))}
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-around">
          <span className="text-lg text-white sm:text-center">Copyright © 2024 Travel Puzzle
          </span>
          <span className="text-lg text-white sm:text-center">Registro Nacional De Turismo
          </span>
          <span className="text-lg text-white sm:text-center">Powered by Clickenial
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="url(#a)" height="40" width="40"><defs><linearGradient x1="50%" x2="50%" y1="97.078%" y2="0%" id="a"><stop offset="0%" stop-color="#0062E0"/><stop offset="100%" stop-color="#19AFFF"/></linearGradient></defs><path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"/><path fill="#FFF" d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"/></svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd"/>
              </svg>

                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
                    </svg>

                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="size-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="size-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
          </div>
      </div>
    </div>
</footer>

    )
}