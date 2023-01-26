import logo from "../assets/images/logo.svg";
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
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            </p>
            <button className="btn btn-hero">Login / Register</button>
          </div>
          <img src={main} alt="Job Hunt" className="img"/>
        </div>
    </main>
  )
}

export default Landing
