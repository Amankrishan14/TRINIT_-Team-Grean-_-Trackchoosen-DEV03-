import "../Css/Farming.css"
import React from 'react'
import { Link } from "react-router-dom"

const Farming = () => {
  return (
    <div className="cards">
    <h1 className="card-heading">For farmers</h1>
    <div className="container">
        <div className="cardd-1">
            <img src="/img/Farmer-landing 1.svg" alt="image"/>
            <h2 className="project-title">Farming methods</h2>
            <div className="project-details">
                <p>Choosing right Farming method is most important thing in farming.The Government has rolled out a number of new initiatives like Soil Health Card Scheme, Neem Coated Urea, Paramparagat Krishi Vikas Yojana (PKVY), Pradhan Mantri Krishi Sinchayee Yojana (PMKSY), National Agriculture Market (e-NAM), Pradhan Mantri Fasal Bima Yojana (PMFBY) and Interest Subvention Scheme. </p>
                <div className="pro-btn">
                <Link to ="/blog">
                  <button  className="btnn">View</button>
                  </Link>
                </div>
            </div>   
        </div>
        <div className="cardd-2">
            <img src="/img/Farmer-landing 1.svg" alt="image"/>
            <h2 className="project-title">Goverment Schemes</h2>
            <div className="project-details">
                <p>The Government has rolled out a number of new initiatives like Soil Health Card Scheme, Neem Coated Urea, Paramparagat Krishi Vikas Yojana (PKVY), Pradhan Mantri Krishi Sinchayee Yojana (PMKSY), National Agriculture Market (e-NAM), Pradhan Mantri Fasal Bima Yojana (PMFBY) and Interest Subvention Scheme.</p>
                <div className="pro-btn">
                <Link to ="/blog">
                  <button  className="btnn">View</button>
                  </Link>
                </div>
            </div>      
        </div>
    </div>
</div>
            
  )
}

export default Farming