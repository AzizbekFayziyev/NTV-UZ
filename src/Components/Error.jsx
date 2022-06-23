import React from 'react'
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div style={{"color": "white","textAlign": "center", "margin": "20px auto"}}>
      <h1>Sahifa Topilmadi ):</h1>
      <Link to="/">Uyga Qaytish Uchun Bosing!</Link>
    </div>
  )
}
