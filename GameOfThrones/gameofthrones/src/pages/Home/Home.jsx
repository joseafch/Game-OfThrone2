import React from 'react'
import { useLocation } from 'react-router-dom'
import './HomeStyle.scss'

const Home = () => {

  const location = useLocation()
  // console.log('esta es la ruta actual',location);
  return ( <div className="backgroundt">
    <div className="background__center"><span className="background__center--text">GAMES OF THRONES</span></div>
    </div>
    
  )
}

export default Home