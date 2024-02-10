import { NavLink } from 'react-router-dom'
import "../App.css"


const Navbar = () => {
  return (
    <nav className="nav">
        <ul className="nav_ul">
            <li>
               <NavLink to={"/"}>Home</NavLink> 
            </li>
            <li>
               <NavLink to={"/post_page"}>Post page - pagination</NavLink> 
            </li>
        </ul>
    </nav>
  )
}

export default Navbar