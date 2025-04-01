type LinkFooter = {
    name: string;
    link: string;
  };
  const baseUrl = import.meta.env.VITE_URL_BACK_IMG
  export const listsLinkFooter: LinkFooter[] = [
    {
      name: "Nosotros",
      link: "https://ejemplo.com/nosotros",
    },
    {
      name: "Contacto",
      link: "https://ejemplo.com/contacto",
    },
    {
      name: "Servicio al cliente",
      link: "https://ejemplo.com/servicio-al-cliente",
    },
    {
      name: "Preguntas Frecuentes",
      link: "https://ejemplo.com/preguntas-frecuentes",
    },
    {
      name: "Puntos de venta Torres Boudica",
      link: "https://ejemplo.com/puntos-de-venta/torres-boudica",
    },
    {
      name: "Puntos de venta Durango",
      link: "https://ejemplo.com/puntos-de-venta/durango",
    },
    {
      name: "Términos y condiciones",
      link: `${baseUrl}terminos.pdf`,
    },
    {
      name: "Política de tratamiento de datos",
      link: `${baseUrl}aviso.pdf`,
    },
    {
      name: "PROFECO",
      link: `${baseUrl}profeco.pdf`,
    },
  ];