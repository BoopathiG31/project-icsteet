import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Barnav from './Barnav'



const Navbar = () => {
   const[menu, setMenu] = useState("menu")
  return (
    <>
      <div className='header'>
        <Link to="/"><img src={assets.logo} alt="logo" width={150} /></Link>
        <input type="checkbox" id='menu-bar'/>
        <label htmlFor="menu-bar">Menu</label>
        <nav className="navbar">
          <ul>
            <li><Link onClick={() => setMenu("home")}  to="/" className={menu === "home" ? "active" : ""}>Home</Link></li>
            <li><a onClick={() => setMenu("about")} className={menu === "about"  || "aboutorg" ? "active" : ""} href="#">about</a>
              <ul>
                <li><Link onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""} to="/about">About ICSTEET</Link></li>
                <li><Link onClick={() => setMenu("aboutorg")} className={menu === "aboutorg" ? "active" : "" }to="/aboutorg" >About Organizer</Link></li>
                <li><Link className='menu'>Speakers</Link></li>
                <li><Link className='menu'>organizing Committee members</Link></li>
              </ul>
            </li>
            <li><a  href="#">Session Tracks</a>
                <ul>
                  <li><Link className='menu'>Session Tracks/Call for Papers</Link></li>
                  <li><Link className='menu'>Essential Download</Link></li>
                </ul>
            </li>
            <li><Link className='menu' to="">Publication</Link></li>
            <li>
              <ul>
                <li><Link className='menu'>Abract/Paper Submission</Link></li>
                <li><Link className='menu'>Submission Guidelines</Link></li>
              </ul>
            </li>
            <li><a href="">Registration</a>
              <ul>
                <li><Link className='menu'>Registration Fee</Link></li>
                <li><Link className='menu'>Available Payments</Link></li>
                <li><Link className='menu'>Registration Instructions</Link></li>
                <li><Link className='menu'>Term & Conditions</Link></li>
                
              </ul>
            </li>
            <li><Link className='menu' to="">Venue</Link></li>
            <li><Link className='menu' to="">Contact</Link></li>
          </ul>
        </nav> 
      </div>
      <Barnav/>
    </>
  )
}

export default Navbar


