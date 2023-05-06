import React from 'react'
import './style.css'

export default function Menu() {
  return (
    <div className='menuContent'>
      <div className="contentMenu">
        <div className="items">
            <span className="icon">❤</span>
            <span className="textSpan">Favoritos</span>
        </div>
        <div className="items">
            <span className="icon">🎁</span>
            <span className="textSpan">Desejados</span>
        </div>
        <div className="items">
            <span className="icon">🌟</span>
            <span className="textSpan">Avaliados</span>
        </div>
        <div className="items">
            <span className="icon">💬</span>
            <span className="textSpan">Resenhas</span>
        </div>
      </div>
    </div>
  )
}
