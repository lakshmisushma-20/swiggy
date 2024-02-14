import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  //console.log("Hrader rendered");

  return (
    <div className="flex justify-between bg-pink-200 shadow-lg">
      <div className="logo-designer">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-0">
          <li className="px-4">
            <Link to="/">HOME</Link>
          </li>
          <li className="px-4">
            <Link to="/about">ABOUT US</Link>
          </li>
          <li className="px-4">
            <Link to="/contact"> CONTACT US</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">GROCERY</Link>
          </li>
          <li className="px-4">CART</li>
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
