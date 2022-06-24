import React from 'react'
import { useState } from 'react'
import Footer from '../Components/Footer'

export default function Movie() {
  const [tv, setTv] = useState("https://www.youtube.com/embed/7LtTjMQTdpE");
  const arr = ["https://www.youtube.com/embed/wVnRq9lQrOM", "https://www.youtube.com/embed/f9WdeDQB8IQ", "https://www.youtube.com/embed/rF7nQYL4rIk","https://www.youtube.com/embed/wt21syNhbco", "https://www.youtube.com/embed/dhwljauLWxk", "https://www.youtube.com/embed/fkEM4KcAo_Y", "https://www.youtube.com/embed/OuCn-lI-3Bo", "https://www.youtube.com/embed/xM9ATOwkkko", "https://www.youtube.com/embed/WaC03oT4kS4", "https://www.youtube.com/embed/YOIY98qy8qY", "https://www.youtube.com/embed/wbl7Qr1YU2w"]
  

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
                <h3 onClick={() => setTv(arr[Math.floor(Math.random() * arr.length)])}>
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
                <iframe src={tv} title="YouTube video player" allowFullScreen frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
              </div>
            </div>


          </div>

          <h1 data-aos="zoom-out" className='title minus'>O'ZBEK FILM</h1>

          <div className="row">
            <div className="col-md-6 col-12">
              <div data-aos="zoom-in" className="mv-card">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/rF7nQYL4rIk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                <h4>Film nomi: <span>Ana xolos</span></h4>
              </div>
              <div data-aos="zoom-in" className="mv-card">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/2clyV8Z6ENg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                <h4>Film nomi: <span>Labbay rayis</span></h4>
              </div>
              <div data-aos="zoom-in" className="mv-card">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/f9WdeDQB8IQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                <h4>Film nomi: <span>Boshga tushganni ko'z ko'rar</span></h4>
              </div>
              <div data-aos="zoom-in" className="mv-card">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/wYZZB7LNH1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                <h4>Film nomi: <span>Onam bilmasin</span></h4>
              </div>
              <div data-aos="zoom-in" className="mv-card">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/85ezIJ_sd1I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                <h4>Film nomi: <span>Tosh tabib</span></h4>
              </div>
              <div data-aos="zoom-in" className="mv-card">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/LK4b_Lwg5no" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                <h4>Film nomi: <span>Baron</span></h4>
              </div>
              <div data-aos="zoom-in" className="mv-card">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/wVnRq9lQrOM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                <h4>Film nomi: <span>Notanish qotil 2</span></h4>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div data-aos="zoom-in" className="mv-card">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/jtvG5fAT2MU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                <h4>Film Nomi: <span>jaydari zarba</span></h4>
              </div>
              <div data-aos="zoom-in" className="mv-card">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/2JJNwqaDQ94" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                <h4>Film nomi: <span>Timur</span></h4>
              </div>
              <div data-aos="zoom-in" className="mv-card">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/fNxF0okFGNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                <h4>Film nomi: <span>Qaysarginam</span></h4>
              </div>
              <div data-aos="zoom-in" className="mv-card">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/7XrD7KN1Zpk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                <h4>Film nomi: <span>Sotqin</span></h4>
              </div>
              <div data-aos="zoom-in" className="mv-card">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/EcFgjOgYHFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                <h4>Film nomi: <span>Yugurganniki emas buyurganniki</span></h4>
              </div>
              <div data-aos="zoom-in" className="mv-card">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/4JhASWD_NmI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                <h4>Film nomi: <span>Abdullajon</span></h4>
              </div>
              <div data-aos="zoom-in" className="mv-card">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/2uOaCoJmFnM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                <h4>Film nomi: <span>Navro'zda muhabbat</span></h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
