import './Nav.css'

import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
export default function Nav() {
    const [activeNav,setActiveNav] = useState('#')

  return (
    <nav>




      <a href="#" className={activeNav ==='#' ? 'active' : ''}  onClick={()=>setActiveNav('#')}><IoHomeOutline/></a>
      <a href="#about"  className={activeNav ==='#about' ? 'active' : ''} onClick={()=>setActiveNav('#about')}><LuUserRound/></a>
      <a href="#services"  className={activeNav ==='#services' ? 'active' : ''} onClick={()=>setActiveNav('#services')}><BiBook/></a>
      <a href="#projects"  className={activeNav ==='#projects' ? 'active' : ''} onClick={()=>setActiveNav('#projects')}><RiServiceLine/></a>
      <a href="#contact"  className={activeNav ==='#contact' ? 'active' : ''} onClick={()=>setActiveNav('#contact')}><BiMessageSquareDetail/></a> 


    </nav>
  )
}


            
      // <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end><IoHomeOutline/></NavLink>
      // <NavLink to="/about"  className={({ isActive }) => isActive ? 'active' : ''}><LuUserRound/></NavLink>
      // <NavLink to="/services"  className={({ isActive }) => isActive ? 'active' : ''}><BiBook/></NavLink>
      // <NavLink to="/projects"  className={({ isActive }) => isActive ? 'active' : ''}><RiServiceLine/></NavLink>
      // <NavLink to="/contact"  className={({ isActive }) => isActive ? 'active' : ''}><BiMessageSquareDetail/></NavLink>