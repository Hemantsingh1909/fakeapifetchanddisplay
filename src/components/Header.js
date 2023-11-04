import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link to='/' className="nav-link active"><img class='w-25' src={logo} alt="logo" /></Link>
          <ul class="navbar-nav">
              <li class="nav-item">
                <Link to='/' class="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li class="nav-item">
                <Link to='/about' class="nav-link active" aria-current="page" href="#">About Us</Link>
              </li>
              <li class="nav-item">
                <Link to='/contact' class="nav-link active" aria-current="page" href="#">Contact</Link>
              </li>
              <li class="nav-item ps-2">
                <Link to='/fetchdata' class="text-white nav-link active btn btn-success" aria-current="page" href="#">fetch data</Link>
              </li>
            </ul>
          </div>
        </nav>
    </>
  )
}

export default Header
