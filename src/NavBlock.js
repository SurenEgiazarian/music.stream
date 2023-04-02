import logo from "./img/logo.png";
import React from "react";
const { useState } = React;

function NavBlock() {
  return (
    <nav className="main__nav nav">
      <Logo />
      <Burger />
    </nav>
  );
}

function Logo() {
  return (
    <div className="nav__logo logo">
      <img src={logo} className="logo__image" alt="logo" />
    </div>
  );
}

function Burger() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);

  return (
    <React.Fragment>
      <div className="nav__burger burger" onClick={toggleVisibility}>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      <Menu visible={visible} />
    </React.Fragment>
  );
}

function Menu(props) {
  const visible = props.visible;
  return (
    visible && (
      <div className="nav__menu menu">
        <ul className="menu__list">
          <li className="menu__item">
            <a href="http://" className="menu__link">
              Главное
            </a>
          </li>
          <li className="menu__item">
            <a href="http://" className="menu__link">
              Мой плейлист
            </a>
          </li>
          <li className="menu__item">
            <a href="http://" className="menu__link">
              Войти
            </a>
          </li>
        </ul>
      </div>
    )
  );
}

export default NavBlock;
