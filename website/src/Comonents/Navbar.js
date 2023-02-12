import "../Css/Navbar.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";
import { ImCross } from "react-icons/im";


const Navbar =()=> {
  const[click,setClick] = useState(false);
  const handelClick = () => setClick(!click);
  return (
    <div className="navbar">
         <Link to="/">
        <img className="Logo" src="/img/Logo leaf.svg" />
      </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to = "/">Home</Link>
          </li>
          <li>
            <Link to = "/blog">Gov Schemes</Link>
          </li>
          <li>
            <Link to = "/farmers"> for Farmer </Link>
          </li>
          <li>
            <Link to = "/enthusiast"> for Enthusiast </Link>
          </li>
          <li>
              <a href="https://www.linkedin.com/in/aman-krishan-983980230/">
                <AiFillLinkedin/>
              </a>
            </li>
            <li>
              <a href="https://github.com/Amankrishan14">
                <AiFillGithub/>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/krishan_aman14">
                <AiFillTwitterSquare/>
              </a>
            </li>
            {/* <Link to ="/contact">
            <button className="btn">Lets's connect</button>
            </Link> */}
        </ul>
        <div className="hamburger" onClick={handelClick}>
          {click ? (<ImCross size={20} style= {{color:"white"}}/>):(<FaHamburger size={20} style= {{color:"white"}}/>) 
            
          }
        
        </div>
    </div>
  )
}

export default Navbar
