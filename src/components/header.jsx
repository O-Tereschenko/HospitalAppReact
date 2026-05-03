import { NavLink } from "react-router-dom";

function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="container nav">
        <h2 className="logo">HospitalApp</h2>

        <nav>
          <ul className="nav-list">
            <li><NavLink to="/">Головна</NavLink></li>
            <li><NavLink to="/catalog">Каталог</NavLink></li>
            <li><NavLink to="/about">Про нас</NavLink></li>
            <li><NavLink to="/contacts">Контакти</NavLink></li>
            <li>Кошик: {cartCount}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;