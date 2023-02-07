import React, { Fragment, useContext } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import './Footer.scss'
// import { MyContext} from './context/MyContext';
import { MyLangContext } from '../../context/myLangContext';


const Footer = () => {
  const {t}=useContext(MyLangContext)
 const foterLocation = useLocation()
//  const name = useParams().name
 const houseName = foterLocation.pathname.split('/Houses/').join('')
 const characterName= foterLocation.pathname.split('/Characters/').join('')
 console.log('este es houseName', houseName);
 console.log('esta es la casa',characterName);

 console.log('titutitu', foterLocation);
  return (
    <>
      {('/Houses/'+houseName !== foterLocation.pathname && '/Characters/'+characterName !== foterLocation.pathname)    && <div className="footer">
        <Link className="Link" to='/Characters'>{t('foo_ch')}</Link>
        <Link className="Link" to='/Houses'>{t('foo_ho')}</Link>
        <Link className="Link" to='/Cronology'>{t('foo_cro')}</Link>
      </div>}
    </>
  )
}

export default Footer