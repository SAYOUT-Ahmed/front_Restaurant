import React from 'react'
import 'bootstrap/js/dist/dropdown'
import 'primeicons/primeicons.css';

function Navbar() {
  return (
    
<nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
  
  
    <i className="navbar-brand bi bi-justify-left fs-4" ></i>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" 
                data-bs-toggle="dropdown" aria-expanded="false">
                USER
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">LOG-OUT</a></li>
            
            
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"></a>
        </li>
      </ul>
      
    </div>
  
</nav>


    
  )
}

export default Navbar

