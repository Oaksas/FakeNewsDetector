import React, { Fragment, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./Data/sideBarData";
import "./Css/navBar.css";
import { IconContext } from "react-icons";

function NavBar({ input, setInput }) {
  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sidebar);
  return (
    <Fragment>
      <IconContext.Provider value={{ color: "" }}>
        <div className="navBar py-1">
          <Link to="#" className="menu-bars mx-3 my-1 ">
            <FaIcons.FaAlignLeft onClick={showSideBar} color="darkorange" />
          </Link>
          <h1 className="text-white">Azur News</h1>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSideBar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((menus, index) => {
              return (
                <li key={index} className={menus.cName}>
                  <Link to={menus.path} className="menu-bars p-1 ">
                    {menus.icon}
                    <span> {menus.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </Fragment>
  );
}

export default NavBar;
