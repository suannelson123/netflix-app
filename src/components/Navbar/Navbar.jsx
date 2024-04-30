import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'
const Navbar = () => {

  const navRef = useRef()

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      navRef.current.classList.add('nav-dark')
    }
    else {
      navRef.current.classList.remove('nav-dark')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by languge</li>

        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="searc_icon" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="bell_icon" className='icons' />
        <div className="navbar-profile">
          <img src={profile} alt="profile" className='profile' />
          <img src={caret_icon} alt="caret" />
          <div className="dropdown">
            <p onClick={() => { logout() }}>Sign out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar


