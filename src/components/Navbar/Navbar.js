import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css';
import { useGlobalContext } from '../../context/context';
import {GoThreeBars} from 'react-icons/go';

const Navbar = () => {
  const { user, handleSidebar } = useGlobalContext();

  return (
    <nav className='navmenu'>
      <div className="container-fluid">
        <Link to='/' className="navmenu-logo">
          <span>Chat</span>
        </Link>
        <div className="navmenu-nav">
          <div className="navmenu-user-state">
            <div className="navmenu-user-state-in">
              {
                user?.email ? (
                  <Link to='/profile' className="navmenu-user-link">
                    <img src={user.img} alt={user.name} />
                    <span>{user.name}</span>
                  </Link>
                ) :
                  (
                    <Link to='/register' className="navmenu-guest-link">
                      Login/Register
                    </Link>
                  )
              }
            </div>
          </div>
          {/* menu toggler  */}
          <button onClick={handleSidebar} type='button' className="navmenu-toggler">
              <GoThreeBars/>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar