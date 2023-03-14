import { Carousel } from 'bootstrap'
import React from 'react'
import logo from '../../assets/logo.png'
import './NavBarTwo.css'

function NavBarTwo() {
  return (
    <div style={{ width:"1440px"}}>
        <nav className="navbar navbar-expand-lg bg-white main">
  <div className="container-fluid">
    <img src={logo} className="logo"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <form className="d-flex allsection" role="search">
        <p className="about me-2">About</p>
        <p className="route me-2">Values</p>
        <p className="route me-2">Journey</p>
        <p className="route me-2">Offerings</p>
        <p className="why me-2">Why Us?</p>
        <p className="route me-2">FAQs</p>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBarTwo