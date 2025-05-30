
import { Link } from "react-router-dom";
import { Star } from "../Wishlist/components/star-componente";

import medios from './assets/medios.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const ClientFooter = () => {
  
  return (
    <footer className="bg-[rgb(48,74,159)] flex flex-col gap-2 p-5">
      <section className="w-full flex flex-row gap-5 items-start   justify-between px-5">
        <div className="w-full h-full flex flex-col gap-2">
          <p className="text-xl text-white font-bold mb-2">Travel Puzzle</p>
          <Link to={'/quienes-somos'} className="text-white text-sm border-white hover:border-b ">
            <p>Quienes Somos</p>
          </Link>
          <Link to={'/legal'} className="text-white border-white text-sm hover:border-b ">
            <p>Legal</p>
          </Link>
          <Link to={'/habla-con-viajero'} className="text-white border-white text-sm hover:border-b ">
            <p>Habla con un viajero que ya estuvo ahi</p>
          </Link>
          <Link to={'/habla-con-viajero'} className="text-white border-white text-sm hover:border-b ">
            <p>Regala Travel Puzzle</p>
          </Link>
        </div>
        <div className="w-full h-full flex flex-col gap-2">
          <p className="text-xl text-white font-bold mb-2">Insipiracion</p>
          <Link to={'/blog'} className="text-white text-sm border-white hover:border-b ">
            <p>Blog</p>
          </Link>
          <Link to={'/Rewards'} className="text-white text-sm border-white hover:border-b ">
            <p>Puzzle Rewards</p>
          </Link>
          <Link to={'/Rewards'} className="text-white text-sm border-white hover:border-b ">
            <p>Genki Japon</p>
          </Link>
        </div>
        <div className="w-full h-full flex flex-col gap-2">
          <p className="text-xl text-white font-bold mb-2">Trabaja con nosotros</p>
          <Link to={'/proveedores'} className="text-white text-sm border-white hover:border-b ">
            <p>Proveedores</p>
          </Link>
          <Link to={'/afiliados'} className="text-white text-sm border-white hover:border-b ">
            <p>Afiliados</p>
          </Link>
          <Link to={'/agencia-de-viaje'} className="text-white text-sm border-white hover:border-b ">
            <p>Agencias de viaje</p>
          </Link>
          <Link to={'/alojamientos'} className="text-white text-sm border-white hover:border-b ">
            <p>Alojamientos</p>
          </Link>
          <Link to={'/transporte'} className="text-white text-sm border-white hover:border-b ">
            <p>Transportes</p>
          </Link>
        </div>
        <div className="w-full h-full flex flex-col gap-2">
          <p className="text-xl text-white font-bold mb-2">Ayuda</p>
          <Link to={'/contactar'} className="text-white text-sm border-white hover:border-b ">
            <p>Contactar con travel Puzzle</p>
          </Link>
        </div>
      </section>
      <section className="w-full flex flex-row justify-between items-start gap-5 px-5">
        <div className="w-full h-full flex flex-col gap-2 items-start justify-start ">
          <p className="text-xl text-white font-bold mb-2">Como nos valoran</p>
          <div className="w-full flex flex-row gap-2 items-center">
            <p className="text-3xl text-white">9.1/10</p>
            <Star key={1} number={5}/>
          </div>
          <p className="text-sm text-white">Mas de 1.5000.000 opiniones sobre <br/>Travel Puzzle.com</p>
        </div>
        <div className="w-full h-full flex flex-col gap-2">
          <p className="text-xl text-white font-bold mb-2 text-center">Grupo VARROD</p>
          <div className="w-full flex flex-col gap-2 items-center">
            <p className="text-lg text-white font-mono">[NOMADA DIGITAL]</p>
            <p className="text-sm text-white">Vuela Libre</p>
          </div>
          <p className=" text-white text-center text-sm">Portabilidad Facil</p>
          <p className=" text-white text-center text-sm">Saber Hoy es Poder <span className="text-sm text-white">un grande para lla vida</span></p>
          <p className=" text-white text-center text-sm">CAPITAN JACK<br/>Mariscos & drinks</p>
        </div>
        <div className="w-full h-full flex flex-col gap-2  ">
          <p className="text-xl text-white font-bold mb-2">Medios de pago</p>
          <img src={medios} alt="Medios de pago" width={400} height={400}/>
        </div>
        <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
          <p className="text-xl text-white font-bold mb-2">Siguenos</p>
          <div className="w-full flex flex-wrap gap-2 items-center justify-center">
            <Link to={'https://www.facebook.com/TravelPuzzleMexico'} target="_blank">
              <FaFacebook fontSize={30} color="white"/>
            </Link>
            <Link to={'/'} target="_blank">
              <FaXTwitter fontSize={30} color="white"/>
            </Link>
            <Link to={'https://www.linkedin.com/company/travel-puzzle'} target="_blank">
              <FaLinkedin fontSize={30} color="white"/>
            </Link>
            <Link to={'https://www.instagram.com/travelpuzzlemx/'} target="_blank">
              <FaInstagram fontSize={30} color="white"/>
            </Link>
            <div className="w-full"></div>
            <Link to={'/'} target="_blank">
              <FaPinterest fontSize={30} color="white"/>
            </Link>
            <Link to={'/'} target="_blank">
              <FaTiktok fontSize={30} color="white"/>
            </Link>
            <Link to={'http://www.youtube.com/@TravelPuzzle'} target="_blank">
              <FaYoutube fontSize={30} color="white"/>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-row justify-between items-center gap-5">
        <div className="w-full">
          <p className="text-white text-xl font-bold">Travel Puzzle</p>
        </div>
        <div className="w-full text-end">
          <p className="text-sm text-white">2025 Travel Puzzle <br/>Todos los derechos reservados.</p>
        </div>
      </section>
      {/* <div className="mx-auto w-full  p-4 py-6 lg:py-8">
        <div className="md:flex  md:justify-around">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center justify-center">
              <img
                src={LogoFooter}
                className="h-50"
                alt="Travel Puzzle footer"
              />
            </a>
            <div className="flex items-center justify-center gap-2">
              <a
                href="https://www.facebook.com/TravelPuzzleMexico"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 36 36"
                  fill="url(#a)"
                  height="40"
                  width="40"
                  className=""
                >
                  <defs>
                    <linearGradient
                      x1="50%"
                      x2="50%"
                      y1="97.078%"
                      y2="0%"
                      id="a"
                    >
                      <stop offset="0%" stopColor="#0062E0" />
                      <stop offset="100%" stopColor="#19AFFF" />
                    </linearGradient>
                  </defs>
                  <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" />
                  <path
                    fill="#FFF"
                    d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/travelpuzzlemx/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  width="40"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="#fff"
                    d="M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575 4.48 4.479 7.253 8.743 9.575 14.717 1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723 0 34.178-.13 38.226-.745 51.723-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718-4.479 4.479-8.743 7.253-14.717 9.574-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746-34.18 0-38.228-.13-51.723-.746-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723 0-34.177.13-38.225.746-51.722.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155 3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672 7.116 7.116 14.254 11.492 22.672 14.763 8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763 7.116-7.116 11.493-14.254 14.764-22.672 3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27C91.698 62.27 62.27 91.7 62.27 128c0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36-8.483 0-15.36-6.876-15.36-15.36 0-8.483 6.877-15.36 15.36-15.36 8.484 0 15.36 6.877 15.36 15.36Z"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/travel-puzzle"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                target="_blank"
              >
                <svg
                  height="40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 256"
                >
                  <path
                    d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
                    fill="#0A66C2"
                  />
                </svg>
              </a>
              <a
                href="http://www.youtube.com/@TravelPuzzle"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                target="_blank"
              >
                 <a
                href="http://www.youtube.com/@TravelPuzzle"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
               <svg viewBox="0 0 256 180"  height="40"
                  width="40"xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z" fill="red"/><path fill="#FFF" d="m102.421 128.06 66.328-38.418-66.328-38.418z"/></svg>
              </a>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1  gap-8 sm:gap-20 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                My Travel Puzzle
              </h2>
              <ul className="text-white  font-medium ml-4">
                {listsLinkFooter.map((link) => (
                  <li className="mb-4" key={link.name}>
                    <a href={link.link} className="hover:underline">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-white font-medium ml-4">
                {listLinkExpress.map((link) => (
                  <li className="mb-4" key={link.name}>
                    <a href={link.link} className="hover:underline">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-around">
          <span className="text-lg text-white sm:text-center">
            Copyright © 2024 Travel Puzzle
          </span>
          <span className="text-lg text-white sm:text-center">
            Registro Nacional De Turismo
          </span>
        
        </div>
      </div> */}
    </footer>
  );
};
