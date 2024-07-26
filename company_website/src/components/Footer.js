import React from 'react'
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg py-70 px-5 text-white'>
      <div> <img src={require('../img/logo.png')} alt=""  className='logo'/>  </div>

      <div className='border-top border-end border-light-subtle'>
        <div>
          <div><h1 className='fs-85'>Get Ready to <br /> Grow Your Business</h1></div>
          <div className='d-flex flex-md-row flex-column py-70'>
            <div className='me-md-5 me-0'><div><button type="button" className='btnem '>info@vdigtech.com</button></div>
            <div className='position-relative'><FaArrowUp  className='ar'/></div>
            </div>
            <div className=''><div><button type="button" className='btnem '>info@vdigtech.com</button></div>
            <div className='position-relative'><FaArrowUp  className='ar'/></div>
            </div>
          </div>
        </div>
        <div className='d-flex'>

          <div className='me-5'>
            <h1>Quick Link</h1>
            <ul className='ps-0'>
              <li>Home</li>
              <li>About US</li>
              <li>Service</li>
              <li>Contact Us</li>
            </ul></div>
          <div>
          <h1>Quick Link</h1>
            <ul className='ps-0'>
              <li>Home</li>
              <li>About US</li>
              <li>Service</li>
              <li>Contact Us</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer