import React from 'react'
import profile from '../images/Profile Picture (PP).jpeg'

const Contact = () => {
  return (
    <>
      <div className='alert alert-primary d-flex justify-content-center align-items-center' role='alert'>
      <div class="card text-center" style={{ width: '20rem' }}>
      <img src={profile} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Hemant Singh Satwal</h5>
        <h6>Mobile: +917355052652</h6>
        <a href="https://www.linkedin.com/in/hemantsatwal/" class="btn btn-primary"><i class="fa-brands fa-linkedin"></i> Visit Linkedin <i class="fa-solid fa-square-arrow-up-right"></i></a>
      </div>
      </div>
      </div>
    </>
  )
}

export default Contact
