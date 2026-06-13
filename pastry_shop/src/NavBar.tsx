import { Link } from 'react-router-dom'
import './App.css'

function NavBar() {

  return (
    <>
    <div className="link_container">
    <Link className='link' to="/">Home</Link>
    <Link className='link' to="/about">About</Link>
    <Link className='link' to="/dashboard">Dashboard</Link>
    </div>

    </>
  )
}

export default NavBar