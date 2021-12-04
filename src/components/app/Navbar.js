import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import { navItems } from "./navItems.js";
import ButtonLogout from "./ButtonLogout";

function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const list = document.querySelectorAll ('.list');
  function activeLink () {
      list.forEach((item) =>
      item.classList.remove('active'));
      this.classList.add ('active');
  }
  list.forEach ((item) => 
  item.addEventListener ('click',activeLink));

  useEffect(() => {
    if (window.innerWidth < 700) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setMobile(true);
      } else {
        setMobile(false);
        setSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={() => setSidebar(false)}>
      <Icons.FaEnvira />
      </Link>
      <ButtonLogout />
        {!mobile && (
          <ul>
            {navItems.map((item) => {
              return (
                <li className="list"

                  key={item.id}>
                  <Link to={item.path}>
                    <span className="icon">
                      {item.icon}
                    </span>
                    <span className="title">
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}
            <div className="indicator"></div>
          </ul>
        )}
        {!mobile && <ButtonLogout />}
        {mobile && (
          <div className="sidebar-toggle">
            {sidebar ? (
              <Icons.FaTimes
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            ) : (
              <Icons.FaBars
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            )}
          </div>
        )}
      </nav>
      <div className={sidebar ? "sidebar active" : "sidebar"}>
        <ul className="sidebar-items">
          {navItems.map((item) => {
            return (
              <li
                key={item.id}
                className={item.sName}
                onClick={() => setSidebar(false)}
              >
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <ButtonLogout onClick={() => setSidebar(false)} />
      </div>
    </>
  );

}

export default Navbar;
