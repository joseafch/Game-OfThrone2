import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'
// import { MyContext} from './context/MyContext';
import { MyLangContext } from '../../context/myLangContext';


const Footer = () => {
  const {t}=useContext(MyLangContext)
  return (
    <>
      <div className="footer">
        <Link className="Link" to='/Characters'>CHARACTERS</Link>
        <Link className="Link" to='/Houses'>{t('foo_ho')}</Link>
        <Link className="Link" to='/Cronology'>CRONOLOGY</Link>
      </div>
    </>
  )
}

export default Footer