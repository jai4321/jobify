import logo from "../assets/images/logo.svg";
import React from "react";
import main from "../assets/images/main.svg";
const Landing = () => {
  return (
    <main>
        <nav>
           <img src={logo} alt="Jobify" className='logo'/>
        </nav>
        <div className="container"></div>
    </main>
  )
}

export default Landing