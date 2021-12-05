import React from 'react';
import * as Icons from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

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
    path: "./userconfig",
    nName: "list",
    sName: "sidebar-item",
    icon: <FiSettings />,
  },

];
