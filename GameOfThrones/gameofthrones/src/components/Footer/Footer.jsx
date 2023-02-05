import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'


const Footer = () => {
  return (
    <>
      <div className="footer">
        <Link className="Link" to='/Characters'>CHARACTERS</Link>
        <Link className="Link" to='/Houses'>HOUSES</Link>
        <Link className="Link" to='/Cronology'>CRONOLOGY</Link>
      </div>
    </>
  )
}

export default Footer