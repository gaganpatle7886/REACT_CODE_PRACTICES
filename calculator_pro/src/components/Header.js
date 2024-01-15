import logo from "../assets/investment-calculator-logo.png";
import "../components/Header.module.css";


function header() {
    return (
        <div>
        <header className="header">
          <img src={logo} alt="logo" />
          <h1>Investment Calculator</h1>
        </header>

        </div>
    ); 

}


export default header;