import React from 'react'
import './style.css'

export default function Header() {


  return (
    <div className='headerCar'>
        <div className="logo"><button className='buttonHeader'>Logo</button></div>
        <div className="certerDiv">
            <button className='buttonHeader'>Modelos</button>
            <button className='buttonHeader'>Ofertas</button>
        </div>
        <div className="vazia"></div>
    </div>
  )
}
