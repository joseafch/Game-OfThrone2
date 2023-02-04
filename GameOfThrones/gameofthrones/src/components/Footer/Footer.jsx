import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'


const Footer = () => {
  return (
    <>
      <div className="footer">
        <Link to='/Characters'>CHARACTERS</Link>
        <Link to='/Houses'>HOUSES</Link>
        <Link to='/Cronology'>CRONOLOGY</Link>
      </div>
    </>
  )
}

export default Footer