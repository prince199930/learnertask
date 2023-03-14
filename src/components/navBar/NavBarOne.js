import React from 'react'
import mail from '../../assets/mail.png'
import phone from '../../assets/phone.png';
import facebook from '../../assets/fb.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import linkedin from '../../assets/linkedin.png'
import './NavBarOne.css'

const NavBarOne = () => {
    return (
        <>
        <div style={{ width:"1440px"}}>
            <nav class="navbar navbar-expand-lg bg-body-dark sticky-top">
  <div class="container">
  <img src={mail} className="mail"/>
    <a class="navbar-brand" href="#">sales@hivesteps.com</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <img src={phone} className="phone"/>
        </li>
        <li class="nav-item">
        <a className="nav-link number" href="#">+ 91-9560573049</a>
        </li>
       
      </ul>
      <div class="d-flex inner" role="search">
      <img className="fb" src={facebook}/>                        
        <img className="fb" src={twitter}/>
                          <img className="fb" src={youtube}/>
                       <img className="fb" src={linkedin}/>
                       <button type="button" class="btn btn-light login">Login</button>
      </div>
    </div>
  </div>
</nav>
            
        </div>
        </>
    )
}

export default NavBarOne

//<nav className="navbar navbar-expand-lg bg-body-dark">
//               <div className="container">
//                   <img src={mail} className="mail"/>
//                   <a className="navbar-brand" href="#">sales@hivesteps.com</a>
//                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                       <span className="navbar-toggler-icon"></span>
//                   </button>
//                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                           <li className="nav-item">
//                           <img src={phone} className="phone"/>
//                           </li>
//                           <li className="nav-item">
//                               <p className="nav-link number" href="#">+ 91-9560573049</p>
//                           </li>
//                       </ul>
//                       <div className="d-flex" role="search">
//                           <img className="" src={facebook}/>
//                           <img className="" src={twitter}/>
//                           <img className="" src={youtube}/>
//                           <img className="" src={linkedin}/>
//                           
//                           {/* <p className="form-control me-2" type="search"  aria-label="Search" />
//                           <p className="btn btn-outline-success" type="submit">Search</p> */}
//                          
//                       </div>
//                       {/* <form className="d-flex" role="search">
//                           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                           <button className="btn btn-outline-success" type="submit">Search</button>
//                       </form> */}
//                   </div>
//               </div>
//           </nav>