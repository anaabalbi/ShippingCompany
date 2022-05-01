import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./Navbar.scss";
import Logo from "../../imgs/logo.png";

function Navbar() {
  const { id } = useParams();
  const NavbarItens = [
    {
      display: "Dashboard",
      icon: <i class="bx bx-home"></i>,
      to: `/perfil/${id}`,
      section: "/perfil",
    },
    {
      display: "Pedidos",
      icon: <i class="bx bx-receipt"></i>,
      to: `/perfil/${id}/pedidos`,
      section: `/pedidos`,
    },
    {
      display: "Ajuda",
      icon: <i class="bx bx-help-circle"></i>,
      to: `/perfil/${id}/ajuda`,
      section: `/ajuda`,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem =
        sidebarRef.current.querySelector(".Navbar_menu_itens");
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  useEffect(() => {
    const curPath = window.location.pathname.split(`/perfil/${id}`)[1];
    const activeItem = NavbarItens.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div className="Navbar">
      <div className="Navbar_logo">
        <img src={Logo} width="80px" />
      </div>
      <div ref={sidebarRef} className="Navbar_menu">
        <div
          ref={indicatorRef}
          className="Navbar_menu_indicator"
          style={{
            transform: `translateX(-50%) translateY(${
              activeIndex * stepHeight
            }px)`,
          }}
        ></div>
        {NavbarItens.map((item, index) => (
          <Link to={item.to} key={index}>
            <div
              className={`Navbar_menu_itens ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div className="Navbar_menu_itens_icon">{item.icon}</div>
              <div className="Navbar_menu_itens_text">{item.display}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
