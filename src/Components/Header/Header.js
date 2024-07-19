import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import {FaTimes,FaBars} from 'react-icons/fa'
import './Header.css';
import img from "../../assets/pizza-logo.jpg";


const Header = () => {
  const [click,setClick]=useState(false)

  const handleClick=()=>{
    setClick(!click)
  }

  return (
    <nav>
      <div className='logo'>
         <img src={img} alt="" width={"50px"} height={"50px"}/>
         <h1>pizza-Hut</h1>
      </div>
      <div className= {click ? 'menu active': 'menu'}>
        <Link to='/'><p>Home</p></Link>
        <Link to='/Items'><p>Items</p></Link>
        <Link to='/Contact'><p>Contact</p></Link>
      </div>
      <div className='hamburger' onClick={handleClick}>
        {
          click?(
            <FaTimes style={{color:"white"}} size={25}/>
          ):
          (
            <FaBars style={{color:"white"}} size={25}/>
          ) 
        }
      </div>
    </nav>
  )
}

export default Header
