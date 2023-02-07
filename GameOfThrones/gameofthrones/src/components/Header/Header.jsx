import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'
// import Characters from './pages/Characters/Characters.jsx'
// import {fitro} from './pages/Characters/Characters.jsx'


const Header = () => {
  let urlActual = window.location;
  return ( <>
    <div className='header'>
    {/* {'http://localhost:3000/'? null: <input type='text'/> } 
    {<Link to='/House'></Link>? <input type='text'/>:null} */}

    {/* <input type="text" onChange={filter} /> */}
  
      <Link to='/'>{'http://localhost:3000/'? <img className='img-home' src={require("../../Imagenes/Group.png")} alt="eh"></img>: null}</Link>
      <button className='bton-lenguaje'><img className='img-home'  src={require("../../Imagenes/spain.png")} alt='h'></img></button>
      <button className='bton-lenguaje'><img className='img-home'  src={require("../../Imagenes/english.png")} alt='e'></img></button>
    </div>
    </>
  )
}

export default Header;