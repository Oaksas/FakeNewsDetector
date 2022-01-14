import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as TiIcons from "react-icons/ti";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Weather",
    path: "/weather",
    icon: <TiIcons.TiWeatherPartlySunny />,
    cName: "nav-text",
  },
  {
    title: "Predict News",
    path: "/predict",
    icon: <MdIcons.MdOnlinePrediction />,
    cName: "nav-text",
  },
  {
    title: "Tech News",
    path: "/tech",
    icon: <GiIcons.GiArtificialIntelligence />,
    cName: "nav-text",
  },
];
