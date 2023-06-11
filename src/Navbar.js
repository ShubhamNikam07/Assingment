import React from 'react';
import {Link} from 'react-router-dom';
export default function Navbar()
{
    return(
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Our Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact Us</a>
        </li>
        <li className="nav-item">
          <Link  to="/Login"  className="bg-white text-danger" style={{position: 'absolute', right: 20,border:'solid red 2px',borderRadius:'5px',padding:'5px 10px',display: 'inline-block',font: '10px',textDecoration: 'none'}}>Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
    )
}