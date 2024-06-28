import React from 'react'

const Footer = () => {
  return (
    <section className='bg-black mt-10 text-gray p-70'>
    <div className='container'>
    <div>
        <div className='fw-500 text-gray'><p>Questions? Call <u>000-800-919-1694</u></p></div>
    </div>

    <div className='mb-40'>
      <div className='row'>
        <div className='col-lg-3 col-6'>
        <ul className=''>
        <li><u>FAQ</u></li>
        <li><u>Investor Relation</u></li>
        <li><u>Privacy</u></li>
        <li><u>Speed Test</u></li>
        </ul>

        </div>
        <div className='col-lg-3 col-6'> <ul className=''>
        <li><u>Help Center</u></li>
        <li><u>Jobs</u></li>
        <li><u>Cookie Preferences</u></li>
        <li><u>Legale Notices </u></li>
      </ul></div>
      
     <div className='col-lg-3 col-6'>
     <ul className=''>
        <li><u>Account</u></li>
        <li><u>Ways to Watch</u></li>
        <li><u>Corporate Informations</u></li>
        <li><u>Only on Netflix</u></li>
      </ul>
     </div>

     <div className='col-lg-3 col-6'>
     <ul className=''>
     <li><u>Media Center</u></li>
     <li><u>Terms Of Use</u></li>
     <li><u>Contact US</u></li>
      </ul>
      </div>

    

     
    </div>
    </div>

    <div className='mb-40'><button value="button" className="engbtn me-15">English</button></div>
    
    <div><p className='fw-500 text-gray'>Netflix India</p></div>
    </div>
  </section>
  )
}

export default Footer