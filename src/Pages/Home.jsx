import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import ntv from "../Images/logo.png"

export default function Home() {
    return (
      <>
        <main>
            <div className="container">
                <h2 className='main-logo'><img src={ntv} alt="NTV" /></h2>
                <h1 data-aos="zoom-in"><span>NTV</span> - ONLINE TELEVEDENIYA</h1>
                <div className="btn-cnt">
                    <Link data-aos="zoom-in-left" to="/movie"><button className="btn-ac">NTV Kinolar</button></Link>
                    <Link data-aos="zoom-in-right" to="/music"> <button className='btn-ac btn-ac-outline'>NTV Music</button></Link>
                </div>
            </div>
        </main>
      </>
    )
}
