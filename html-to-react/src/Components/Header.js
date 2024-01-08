import './CSS/Header.css';
import logo from '../images/logo.png';

function header() {
    return (
        <header className="header" >
        <div className=" flex container">
          <div className="logo">
            <a href="#home">
              <img src={logo} />
            </a>
          </div>
          <nav className="nav">
            <a href="#">Home</a>
            <a href="#">Falilities</a>
            <a href="#">Service</a>
            <a href="#">Book</a>
          </nav>
        </div>
      </header>
    );
}

export default header;