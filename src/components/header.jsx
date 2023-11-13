const Header = () => {
  return (
    <div>
      {/* ======= Header ======= */}
      <header
        id="header"
        className="fixed-top d-flex justify-content-center align-items-center header-transparent"
      >
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#portfolio">
                Portfolio
              </a>
            </li>
            
            <li>
              <a className="nav-link scrollto " href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
        {/* .navbar */}
      </header>
      {/* End Header */}
    </div>
  );
};
export default Header;