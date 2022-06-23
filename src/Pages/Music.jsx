import React from 'react'
import Footer from '../Components/Footer';

export default function Music() {
  // MUSIC LINK
  const msplay = "http://fm.biztv.uz:8000/live";

  // MUSIC PLAY FUNCTION

  function musicPlay() {
    window.open(msplay)
  }

  // MUSIC SECTION

  return (
    <>
      <section id='music'>
        <div className="container">

          <h1 data-aos="zoom-out" className='title'>NTV MUSIC</h1>

          <div data-aos="zoom-out-down" className="alert alert-primary">
           Onlayn Cheksiz Radioni Eshitish Uchun "PLAY" Tugmasini Bosing! 
          </div>

          <div data-aos="zoom-out-down" className="music">

            <div className="bg-ms">
              <button onClick={musicPlay}>PLAY</button> 

            </div>

          </div>

        </div>

      </section>

      <Footer/>
    </>
  )
}
