function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <h2 className="logo">HospitalApp</h2>

        <nav>
          <ul className="nav-list">
            <li><a href="#">Головна</a></li>
            <li><a href="#">Каталог</a></li>
            <li><a href="#">Про нас</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;