import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { MyLangContext } from '../../context/myLangContext'
import './HomeStyle.scss'


const Home = () => {
  const {t}=useContext(MyLangContext)
  const location = useLocation()
  let Juego = "Game of Thrones"
  // console.log('esta es la ruta actual',location);
  return ( <div className="backgroundt">
    <div className="background__center"><span className="background__center--text">{t('Game_of_Thrones')}</span></div>
    </div>
    
  )
}

export default Home