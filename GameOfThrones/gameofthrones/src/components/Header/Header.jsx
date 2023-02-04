import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

const Header = () => {
  return ( <>
    <div className='header'>
      <input type='text'/>
      <Link to='/'><img className='img-home' src={require("../../Imagenes/Group.png")} alt="eh"></img></Link>
      <button><img className='img-home'  src={require("../../Imagenes/spain.png")} alt='h'></img></button>
      <button><img className='img-home'  src={require("../../Imagenes/english.png")} alt='e'></img></button>
    </div>
    </>
  )
}

export default Header;