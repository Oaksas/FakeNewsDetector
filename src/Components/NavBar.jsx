import React, { Fragment, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";
import { SidebarData } from "./Data/sideBarData";

function NavBar() {
  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sidebar);
  return (
    <Fragment>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaAlignLeft onClick={showSideBar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu-active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <IoIcons.IoMdCloseCircle />
            </Link>
          </li>
          {SidebarData.map((menus, index) => {
            return (
              <li key={index} className={menus.cName}>
                <Link to={menus.path} className="menu-bars">
                  {menus.icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Fragment>
  );
}

export default NavBar;
