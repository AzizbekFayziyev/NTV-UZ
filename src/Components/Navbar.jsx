import React, { useEffect, useRef } from 'react'
import Logo from "../Images/logo.png"
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

// NAVBAR MENU
export default function Navbar() {
    const navRef = useRef();
    const menuBtnActive = useRef()
    const [navActive, setNavActive] = useState(false);

    function navbar() {
        navRef.current.classList.toggle("nav-active");
        setNavActive(!navActive)
    }

    function linkClick() {
        navRef.current.classList.remove("nav-active");
        setNavActive(false);
    }


    useEffect(() => {
        if (navActive) {
            menuBtnActive.current.classList.add("menuBtn-active")
        }
    })

    


    return (
        <nav>
            <div className="nav-a container nav justify-content-between align-items-center">

                <div className="logo">
                    <Link to="/"><img src={Logo} alt="LOGO" /></Link>
                </div>

                <ul ref={navRef} className='nav'>
                    <li className='nav-item'><NavLink onClick={linkClick} to="/" className='nav-link'>Bosh Menyu</NavLink></li>
                    <li className='nav-item'><NavLink onClick={linkClick} to="/music" className='nav-link'>NTV Music</NavLink></li>
                    <li className='nav-item'><NavLink onClick={linkClick} to="/movie" className='nav-link'>NTV Kanallar</NavLink></li>
                    <li className='nav-item'><NavLink onClick={linkClick} to="/contact" className='nav-link'>Aloqa</NavLink></li>

                    <a href='https://youtube.com/channel/UCwirDHHncAeYWTJIszM9XPw

' onClick={linkClick}><button className='btn-ac'>Bizning Kanal</button></a>
                </ul>

                {!navActive ?
                    <div onClick={navbar} className="menuBtn"><i class="fa-solid fa-bars"></i></div> :
                    <div ref={menuBtnActive} onClick={navbar} class="menuBtn"><i class="fa-solid fa-xmark"></i></div>}

            </div>

        </nav>
    )
}
