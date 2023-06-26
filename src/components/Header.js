import logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Логотип Mesto Russia" className="logo__img" />
      </div>
    </header>
  );
}

export default Header;
