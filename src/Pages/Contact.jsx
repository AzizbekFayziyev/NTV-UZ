import React from 'react'
import Footer from '../Components/Footer'

export default function Contact() {
  return (
  <>
    <section id='contact' className='container'>
      <h1 data-aos="zoom-out" className='title'>ALOQA BO'LIMI</h1>
      <div className="contact">

        <div className="contact-item">
          <a target="_blank" href="https://t.me/SMMN2">
            <i class="fa-brands fa-telegram"></i>
            <h2> TELEGRAM</h2>
          </a>
        </div>

        <div className="contact-item">
          <a target="_blank" href="https://youtube.com/channel/UCwirDHHncAeYWTJIszM9XPw">
            <i class="fa-brands fa-youtube"></i>
            <h2> YOU TUBE</h2>
          </a>
        </div>

      </div>
    </section>

    <Footer/>
  </>
  )
}
