import React from "react";
import {
    ArrowPathIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
  } from "@heroicons/react/24/outline";

interface Props {
    name:string;
    description:string;
    href:string;
    icon:React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
}

export const ComunityList:Props[] = [
    {
      name: "Travel Puzzle Rewards",
      description: "Afiliate",
      href: "#",
      icon: ChartPieIcon,
    },
    {
      name: "Blog",
      description: "Blog",
      href: "#",
      icon: CursorArrowRaysIcon,
    },
    {
      name: "Fotos",
      description: "Fotos",
      href: "#",
      icon: FingerPrintIcon,
    },
    {
      name: "Opiniones",
      description: "Opiniones",
      href: "#",
      icon: SquaresPlusIcon,
    },
    {
      name: "Nosotros",
      description: "Nosotros",
      href: "#",
      icon: ArrowPathIcon,
    },
  ];