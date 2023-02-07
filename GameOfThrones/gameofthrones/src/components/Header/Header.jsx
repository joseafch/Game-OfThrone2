import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MyLangContext } from '../../context/myLangContext';
import './Header.scss'

// import './LenguageSelect.scss'
// import { useContext } from 'react'

// import Characters from './pages/Characters/Characters.jsx'
// import {fitro} from './pages/Characters/Characters.jsx'


const Header = () => {
  let urlActual = useLocation();
  const {changeLenguage } = useContext(MyLangContext)
const locationHome=useLocation()
  return ( <>
    <div className='header'>
     
   <input type='text'/>
   <input type="text"  />


    {/* <input type="text" onChange={filter} /> */}
  
      {locationHome.pathname !== '/' && <Link to='/'>{'http://localhost:3000/'? <img className='img-home' src={require("../../Imagenes/Group.png")} alt="home"></img>: null}</Link>}
      <button onClick={()=> changeLenguage('es')} className='bton-lenguaje'><img className='img-home'  src={require("../../Imagenes/spain.png")} alt='español'></img></button>
      <button  onClick={()=> changeLenguage('en')} className='bton-lenguaje'><img className='img-home'  src={require("../../Imagenes/english.png")} alt='ingles'></img></button>
    </div>
    </>
  )
}
// onClick={()=> changeLenguage('en')} 
export default Header;