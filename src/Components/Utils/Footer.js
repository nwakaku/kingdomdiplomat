import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social_icon">
        <li>
          <a href="https://www.facebook.com/pst.ndukwendukwe">
            <FiFacebook />
          </a>
        </li>
        <li>
          <a href="">
            <FiTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/pst_ndukwe/">
            <FiInstagram />
          </a>
        </li>
        <li>
          <a href="#">
            <FaWhatsapp />
          </a>
        </li>
      </ul>
      <ul className="menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Teams</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <p>@2022 KINGDOM DIPLOMATS || All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
