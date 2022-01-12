import logo from "../../pic/logo.png";

const Navbar = () => {
  return (
    <div className="main-bar">
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">
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

        <ul>
          <li className="active">
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT US</a>
          </li>
          <li>
            <a href="#">MESSAGES</a>
          </li>
          <li>
            <a href="#">EVENTS</a>
          </li>
          <li>
            <a href="#">LOCATIONS</a>
          </li>
          <li>
            <a href="#">ONLINE</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
