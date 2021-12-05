import React from 'react';
import * as Icons from "react-icons/fa";

export const navItems = [
  {
    id: 1,
    title: "Inicio",
    path: "./",
    nName: "list",
    sName: "sidebar-item",
    icon: <Icons.FaGripHorizontal />,
  },
  {
    id: 2,
    title: "Buscar",
    path: "./search",
    nName: "list",
    sName: "sidebar-item",
    icon: <Icons.FaSistrix />,
  },
  {
    id: 3,
    title: "Productos",
    path: "./products",
    nName: "list",
    sName: "sidebar-item",
    icon: <Icons.FaCartArrowDown />,
  },
  {
    id: 4,
    title: "Configuración",
    path: "./contactus",
    nName: "list",
    sName: "sidebar-item",
    icon: <Icons.FaPhone />,
  },
/*   {
    id: 5,
    title: "Cinco",
    path: "./contactus",
    nName: "list",
    sName: "sidebar-item",
    icon: <Icons.FaPhone />,
  }, */
/*   {
    id: 6,
    title: "Seis",
    path: "./contactus",
    nName: "list",
    sName: "sidebar-item",
    icon: <Icons.FaPhone />,
  }, */
];
