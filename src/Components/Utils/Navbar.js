import logo from "../../pic/logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
          <a href="#">
            {" "}
            <img src={logo} /> KINGDOMDIPLOMATS
          </a>
        </div>

        <ul
          className={`${count ? "ul" : "ul uli"}`}
          // onClick={setCount(!count)}
        >
          <li className="active">
            <Link to="/" href="#" onClick={() => setCount(!count)}>
              HOME
            </Link>
          </li>
          <li>
            <a href="#" onClick={() => setCount(!count)}>
              ABOUT US
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UC11cQHgDCIXrdqKL4fkVlgg">
              MESSAGES
            </a>
          </li>
          <li onClick={() => setCount(!count)}>
            <Link to="/events">EVENTS</Link>
          </li>
          <li onClick={() => setCount(!count)}>
            <a href="#">LOCATIONS</a>
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
