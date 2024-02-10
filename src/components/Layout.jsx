import { Outlet } from 'react-router-dom'
import "../App.css"


const Layout = () => {
  return (
    <div>
        <Outlet/>
        <footer className="footer">
            <p>26.12.2023</p>
        </footer>
    </div>
  )
}

export default Layout