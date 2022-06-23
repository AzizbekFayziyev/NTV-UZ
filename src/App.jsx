import Navbar from "./Components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Music from "./Pages/Music";
import Movie from "./Pages/Movie";
import Contact from "./Pages/Contact";
import Error from "./Components/Error";
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"


export default function App() {

  useEffect(() => {
    AOS.init();

    window.replainSettings = { id: '51eba5d5-b2b5-42ad-9b38-aae194e7d5db' };
    (function (u) {
      var s = document.createElement('script'); s.async = true; s.src = u;
      var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })('https://widget.replain.cc/dist/client.js');

  }, [])

  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )

}
