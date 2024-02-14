import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  //console.log("Hrader rendered");

  return (
    <div className="flex">
      <div className="logo-designer">
        <img className="w-56 " src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/contact"> CONTACT US</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>CART</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
