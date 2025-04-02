import { ClientFooter } from "../Footer/ClientFooter";
import { ClientNav } from "../Header/nav/ClientNav";

import registro from './assets/registro.jpg'
export const Legal = () => {
    const baseUrl = import.meta.env.VITE_URL_BACK_IMG
  return (
    <>
      <ClientNav />
      <main className="p-6 bg-gray-100 rounded-lg shadow-md text-gray-900 flex items-center justify-center">
        <div className="w-1/2">

            <h1 className="text-xl font-bold mb-4">Aviso Legal</h1>
            <p className="mb-4">
            Le informamos que <strong>TRAVEL PUZZLE</strong> podrá facilitar
            información personal a las autoridades competentes cuando sea
            requerido conforme a la legislación vigente o imperativo debido a un
            procedimiento judicial.
            </p>
            <h3 className="text-lg font-semibold mb-2">
            Registro y Cumplimiento Fiscal
            </h3>
            <ul className="list-disc pl-6 mb-4">
            <li>
                Servicio de Administración Tributaria (SAT) bajo el nombre de{" "}
                <strong>Claudia Leticia Rodríguez Laveaga</strong>, con Registro
                Federal de Contribuyentes (RFC) <strong>ROLC6211204M2</strong>.
            </li>
                <li>Registro Nacional de Turismo.</li>
                <li><img src={registro} alt="registro" width={200} height={200} /></li>

            </ul>
            <h3 className="text-lg font-semibold mb-2">Información y Políticas</h3>
            <ul className="list-disc pl-6 mb-4">
            <li>
                Nuestro contrato de adhesión registrado en PROFECO está disponible
                para su consulta{" "}
                <a href={`${baseUrl}profeco.pdf`} target="_blank" className="text-blue-600 hover:underline">
                aquí
                </a>
                . Invitamos a todos nuestros clientes a revisarlo para conocer a
                detalle sus derechos y obligaciones.
            </li>
            <li>
                Nuestra <strong>Política de Privacidad</strong> está disponible para
                su consulta{" "}
                <a href={`${baseUrl}aviso.pdf`} target="_blank" className="text-blue-600 hover:underline">
                aquí
                </a>
                . Solo se aplica a la información recogida por TRAVEL PUZZLE.
            </li>
            <li>
                <strong>Términos y Condiciones</strong> disponibles para su consulta{" "}
                <a href={`${baseUrl}terminos.pdf`} target="_blank" className="text-blue-600 hover:underline">
                aquí
                </a>
                .
            </li>
            </ul>
            <p className="mb-4">
            Nos comprometemos a mantener la transparencia y el cumplimiento de
            todas las obligaciones legales aplicables.
            </p>
            <p>
            Para cualquier duda o información adicional, por favor contáctenos a
            través de{" "}
            <a
                href="mailto:info@travelpuzzle.com.mx"
                className="text-blue-600 hover:underline"
            >
                info@travelpuzzle.com.mx
            </a>{" "}
            o al <strong>5536490320</strong>.
            </p>
        </div>
      </main>
      <ClientFooter />
    </>
  );
};
