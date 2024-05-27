import "./Navbar.css"
import logo from "../../assets/logo_cz.png"
import arrow from "../../assets/arrow_icon.png"
const Navbar = () => {
  return (
    <div className="navbar">
        <img src={logo} alt="logo" className="logo"/>
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select name="" id="">
                <option value="usd">USD</option>
                <option value="euro">EURO</option>
                <option value="inr">INR</option>
            </select>
            <button>Sign Up <img src={arrow} alt="arrow"/></button>
        </div>
    </div>
  )
}

export default Navbar
