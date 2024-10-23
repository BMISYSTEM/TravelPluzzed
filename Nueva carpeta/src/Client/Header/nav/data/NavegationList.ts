
interface Props{
    name:string;
    href:string;
    classnamefull:string,
    classNameSmall:string,
}

export const NavegationList:Props[] = [
    {
      name: "Inicio",
      href: "#",
      classnamefull:
        "text-sm font-semibold leading-6 text-blue-700 hover:text-blue-900",
      classNameSmall:
        "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-700 hover:text-blue-900 hover:bg-gray-50",
    },
    {
      name: "Destinos",
      href: "#",
      classnamefull:
        "text-sm font-semibold leading-6 text-blue-700 hover:text-blue-900",
      classNameSmall:
        "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-700 hover:text-blue-900 hover:bg-gray-50",
    },
    {
      name: "Experiencias",
      href: "#",
      classnamefull:
        "text-sm font-semibold leading-6 text-blue-700 hover:text-blue-900",
      classNameSmall:
        "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-700 hover:text-blue-900 hover:bg-gray-50",
    },
    {
      name: "Trasportes",
      href: "#",
      classnamefull:
        "text-sm font-semibold leading-6 text-blue-700 hover:text-blue-900",
      classNameSmall:
        "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-700 hover:text-blue-900 hover:bg-gray-50",
    },
  ];