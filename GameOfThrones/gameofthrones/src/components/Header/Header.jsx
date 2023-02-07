import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MyLangContext } from '../../context/myLangContext';
import './Header.scss'

// import './LenguageSelect.scss'
// import { useContext } from 'react'

// import Characters from './pages/Characters/Characters.jsx'
// import {fitro} from './pages/Characters/Characters.jsx'


const Header = () => {
  // let urlActual = useLocation();
  const {changeLenguage } = useContext(MyLangContext)
  const locationHome=useLocation()
  // const foterLocation = useLocation()
  const houseName = locationHome.pathname.split('/Houses/').join('')
  const characterName= locationHome.pathname.split('/Characters/').join('')

  // function back(){
  //   if ('/Houses/'+houseName === locationHome.pathname){
  //      <Link to='/Houses'></Link>
  //   } else if ('/Characters/'+characterName === locationHome.pathname) {
  //     <Link to='/Characters'></Link>
  //   }
    
  // }
  let back=()=>(window.history.back())
  return ( <>

    <div className='header'>

    {('/Houses/'+houseName === locationHome.pathname || '/Characters/'+characterName === locationHome.pathname) &&  <div className='div-volver'> <button onClick={back} className='bton-back'><img   src={require("../../Imagenes/Vector.png")} alt="coso"/> </button> <span>Volver</span></div>}

   {/* <input type='text'/>
   <input type="text"  /> */}

    {/* <input type="text" onChange={filter} /> */}
    <div className='div-bton-nav'>
  <div >
      {locationHome.pathname !== '/' && <Link to='/'>{'http://localhost:3000/'? <img className='img-home' src={require("../../Imagenes/Group.png")} alt="home"></img>: null}</Link>}
      <button onClick={()=> changeLenguage('es')} className='bton-lenguaje'><img className='img-home'  src={require("../../Imagenes/spain.png")} alt='español'></img></button>
      <button  onClick={()=> changeLenguage('en')} className='bton-lenguaje'><img className='img-home'  src={require("../../Imagenes/english.png")} alt='ingles'></img></button>
      </div>
      </div>
    </div>
    </>
  )
}
// onClick={()=> changeLenguage('en')} 
export default Header;