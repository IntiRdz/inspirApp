import React from 'react';
import * as Icons from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { RiFileEditLine } from "react-icons/ri";
import { Brain } from '../../assets/icons/Brain';
import { Drop } from '../../assets/icons/Drop';


export const sideItems = [
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
  {
    id: 5,
    title: "Cinco",
    path: "./contactus",
    nName: "list",
    sName: "sidebar-item",
    icon: <RiFileEditLine />,
  }, 
   {
    id: 6,
    title: "Configuración",
    path: "./userconfig",
    nName: "list",
    sName: "sidebar-item",
    icon: <FiSettings />,
  },
  {
    id: 7,
    title: "Configuración",
    path: "./userconfig",
    nName: "list",
    sName: "sidebar-item",
    icon: <Brain fill="white" className="icoSidebar"/>
  },
  {
    id: 8,
    title: "Configuración",
    path: "./userconfig",
    nName: "list",
    sName: "sidebar-item",
    icon: <FiSettings />,
  },
  {
    id: 9,
    title: "Configuración",
    path: "./contactus",
    nName: "list",
    sName: "sidebar-item",
    icon: <Icons.FaPhone />,
  },
  {
    id: 10,
    title: "Cinco",
    path: "./contactus",
    nName: "list",
    sName: "sidebar-item",
    icon: <RiFileEditLine />,
  }, 
   {
    id: 11,
    title: "Configuración",
    path: "./userconfig",
    nName: "list",
    sName: "sidebar-item",
    icon: <FiSettings />,
  },
  {
    id: 12,
    title: "Configuración",
    path: "./userconfig",
    nName: "list",
    sName: "sidebar-item",
    icon: <Brain fill="white" className="icoSidebar"/>
  },
  {
    id: 13,
    title: "Configuración",
    path: "./userconfig",
    nName: "list",
    sName: "sidebar-item",
    icon: <Drop className="icoSidebar" />,
  }
];
