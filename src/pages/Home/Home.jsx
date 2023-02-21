import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'

export default function Home() {
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    let navigate = useNavigate()
    const Logout = async()=>{
        await removeCookie('nome', cookies.nome)
        await removeCookie('senha', cookies.senha)
        navigate('/')
        window.location.reload()
    }
  return (
    <div className='contairerHome'>
        <div className="header">
            <div className="vazia"></div>
            <div className="vazia"></div>
            <div className="menu">
                <Link to="/home" className="jogar">Home</Link>
                <li className="jogar">Instruções</li>
                <li className="jogar" onClick={Logout}>Logout</li>
                <Link to="/jogar" className="jogar">Jogar</Link>
            </div>
        </div>
        <div className="section">
            <div className="heroImg">
                <img src="./3839214.jpg" alt="" className="hero" />
            </div>
            <div className="textHome">
                <h1 className="textMain">Miti Code</h1>
                <p className="textFiirst">Lorem ipsum dolor sit
                 amet consectetur, adipisicing elit. Tempore 
                 placeat sequi veritatis possimus! Est dolorem 
                 7distinctio libero, quibusdam nam dignissimos 
                 voluptatibus iusto atque ab 
                rem cumque praesentium aspernatur itaque sunt.</p>
                <button className="jogarNovamente"><Link to="/jogar" className='colorButt'>Jogar</Link></button>
            </div>
        </div>
    </div>
  )
}
