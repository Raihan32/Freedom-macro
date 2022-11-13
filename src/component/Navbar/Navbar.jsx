import React from 'react'
import Logo from "./imgnavbar/Logo.png"
import Profile from "./imgnavbar/user.png"
import './css.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <span className="navbar-toggler"><img style={{marginLeft : " 15px"}} src={Logo} /></span>
        
        <div className="collapse navbar-collapse" >
            <a><img style={{marginLeft : " 15px"}} src={Logo} /></a>      
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
                <li className="nav-item">
                    <a className="nav-link active animasi-left-right"  href="#">Beranda</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active animasi-left-right" href="#">Artikel</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active animasi-left-right" href="#">Pejuang</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active animasi-left-right" href="#">Jurnal</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active animasi-left-right" href="#">Tindakan</a>
                </li>
            </ul>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <a><img src={Profile} /></a> 
            </ul>
        </div>
        
    </div>
</nav>
    </div>
  )
}

export default Navbar;