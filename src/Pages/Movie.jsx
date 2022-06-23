import React from 'react'
import { useState } from 'react'
import Footer from '../Components/Footer'

export default function Movie() {
  const [tv, setTv] = useState("https://www.youtube.com/embed/7LtTjMQTdpE")

  return (
   <>
    <section id='movies'>
      <div className="container">
        <h1 data-aos="zoom-out" className='title'>NTV KINOLAR</h1>

        <div className="row">

          <div data-aos="zoom-in-right" className="col-xl-4 col-12">
            <h2>KANALLARDAN BIRINI TANLANG:</h2>
            <div className="mv">
              <h3 onClick={() => setTv("https://www.youtube.com/embed/7LtTjMQTdpE")}>
                Kliplar
              </h3>
            </div>
            <div className="mv">
              <h3 onClick={() => setTv("https://www.youtube.com/embed/Iqr3XIhSnUQ")}>
                Kinolar
              </h3>
            </div>
            <div className="mv">
              <h3
                onClick={() => setTv("https://www.youtube.com/embed/L_WMy4aCJKY")}>
                Ko'rsatuvlar
              </h3>
            </div>
          </div>


          <div data-aos="zoom-in-left" className="col-xl-8 col-12">
            <div className="tv">
              <iframe src={tv} title="YouTube video player" allowFullScreen frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>


        </div>
      </div>
    </section>

    <Footer/>
   </>
  )
}
