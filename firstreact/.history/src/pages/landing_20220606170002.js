import logo from "../assets/images/logo.svg";
import React from "react";
import main from "../assets/images/main.svg";
const Landing = () => {
  return (
    <main>
        <nav>
           <img src={logo} alt="Jobify" className='logo'/>
        </nav>
        <div className="container page">
          <div className="info">
            <h1>Job <span>Tracking</span> App</h1>
          </div>
        </div>
    </main>
  )
}

export default Landing
