import logo from "./img/logo.png";

function NavBlock() {
  return (
    <nav className="main__nav nav">
      <Logo />
      <Burger />
      <Menu />
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
  return (
    <div className="nav__burger burger">
      <span className="burger__line"></span>
      <span className="burger__line"></span>
      <span className="burger__line"></span>
    </div>
  );
}

function Menu() {
  return (
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
  );
}

export default NavBlock;
