import logo from "../../pic/logo.png";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [count, setCount] = useState(true);

  return (
    <div className="main-bar">
      <nav>
        <input type="checkbox" id="check" />
        <label
          for="check"
          className="checkbtn"
          onClick={() => setCount(!count)}
        >
          <span></span>
          <span></span>
          <span></span>
        </label>

        <div className="logo-header">
          <a to>
            {" "}
            <img src={logo} /> KINGDOMDIPLOMATS
          </a>
        </div>

        <ul
          className={`${count ? "ul" : "ul uli"}`}
          // onClick={setCount(!count)}
        >
          <li >
            <NavLink to="/"  className={({ isActive }) =>
              isActive ? 'active' : undefined
            }

             onClick={() => setCount(!count)}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' onClick={() => setCount(!count)}>
              ABOUT US
            </NavLink>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UC11cQHgDCIXrdqKL4fkVlgg">
              MESSAGES
            </a>
          </li>
          <li onClick={() => setCount(!count)}>
            <NavLink to="/events">EVENTS</NavLink>
          </li>
          <li onClick={() => setCount(!count)}>
            <NavLink to ='/location'>LOCATIONS</NavLink>
          </li>
          <li>
            <a href="https://kingdomdiplomatsng.radio12345.com/">KD_RADIO</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
