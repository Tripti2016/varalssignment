import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenuFill, RiCloseLine } from 'react-icons/ri';
const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='navBar '>

    <h2 className="logo">Varal <span>uae</span></h2>
    <div className="navRight">
        <ul className='link-container'>
           <li> <Link to={'/'}>Home</Link></li>                      
           <li> <Link to={'/Services'}>Services</Link></li>
           <li> <Link to={'/Price'}>Pricing</Link></li>                      
           <li> <Link to={'/AboutUs'}>About Us</Link></li>
            
            <button>Start a company</button>
        </ul>

    </div>
    <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine onClick={() => setToggleMenu(false)} />
          : <RiMenuFill  onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
    
          <ul >
          <li> <Link to={'/'}>Home</Link></li>                      
           <li> <Link to={'/Services'}>Services</Link></li>
           <li> <Link to={'/Price'}>Pricing</Link></li>                      
           <li> <Link to={'/AboutUs'}>About Us</Link></li>
           <button>Start a company</button>
          </ul>
         
      
        )}
      </div>


</nav>
  )
}

export default NavBar
