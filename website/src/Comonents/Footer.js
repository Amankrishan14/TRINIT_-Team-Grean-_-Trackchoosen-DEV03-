import React from "react";
import "../Css/Footer.css";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="foter">
      <div className="footer-content">
        <h3>Plantify</h3>
        <p>
        one-stop solution for all gardening aspirations and the country’s farmers.
        </p>
        <ul className="socials">
          <li>
            <a href="https://m.facebook.com/100007803135881/">
              <AiFillFacebook />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/krishan_aman14">
              <AiFillTwitterSquare />
            </a>
          </li>
          <li>
            <a href="https://github.com/Amankrishan14">
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/aman-krishan-983980230/">
              <AiFillLinkedin />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          copyright &copy;2023 <a href="#">Ak</a>{" "}
        </p>
      </div>
      <div className="footer-menu">
        <ul className="f-menu">
          <li>
            <Link to="/">
              <a href="">Home</a>
            </Link>
          </li>
          <li>
            <Link to="/blog">
              <a href="">Blog</a>
            </Link>
          </li>
          <li>
            <Link to="/team">
              <a href="">Team</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
