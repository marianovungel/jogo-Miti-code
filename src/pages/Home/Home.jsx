import React from 'react'
import './style.css'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Home() {

    const [lido, setLido] = useState()
    const [ler, setLer] = useState()

    useEffect(()=>{
        const SetValors = ()=>{
            setLido(130)
            setLer(60)
        }

        SetValors()
    }, [])

    const data = [
        {
            id: "1",
            img: "https://img.freepik.com/fotos-gratis/paisagem-de-nevoeiro-matinal-e-montanhas-com-baloes-de-ar-quente-ao-nascer-do-sol_335224-794.jpg",
            estrela: "⭐⭐⭐⭐⭐"
        },
        {
            id: "12",
            img: "https://img.freepik.com/fotos-gratis/paisagem-de-nevoeiro-matinal-e-montanhas-com-baloes-de-ar-quente-ao-nascer-do-sol_335224-794.jpg",
            estrela: "⭐⭐⭐⭐⭐"
        },
        {
            id: "3",
            img: "https://img.freepik.com/fotos-gratis/paisagem-de-nevoeiro-matinal-e-montanhas-com-baloes-de-ar-quente-ao-nascer-do-sol_335224-794.jpg",
            estrela: "⭐⭐⭐⭐⭐"
        },
        {
            id: "4",
            img: "https://img.freepik.com/fotos-gratis/paisagem-de-nevoeiro-matinal-e-montanhas-com-baloes-de-ar-quente-ao-nascer-do-sol_335224-794.jpg",
            estrela: "⭐⭐⭐⭐⭐"
        },
        {
            id: "5",
            img: "https://img.freepik.com/fotos-gratis/paisagem-de-nevoeiro-matinal-e-montanhas-com-baloes-de-ar-quente-ao-nascer-do-sol_335224-794.jpg",
            estrela: "⭐⭐⭐⭐⭐"
        },
        {
            id: "6",
            img: "https://img.freepik.com/fotos-gratis/paisagem-de-nevoeiro-matinal-e-montanhas-com-baloes-de-ar-quente-ao-nascer-do-sol_335224-794.jpg",
            estrela: "⭐⭐⭐⭐⭐"
        },
        {
            id: "7",
            img: "https://img.freepik.com/fotos-gratis/paisagem-de-nevoeiro-matinal-e-montanhas-com-baloes-de-ar-quente-ao-nascer-do-sol_335224-794.jpg",
            estrela: "⭐⭐⭐⭐⭐"
        },
        {
            id: "8",
            img: "https://img.freepik.com/fotos-gratis/paisagem-de-nevoeiro-matinal-e-montanhas-com-baloes-de-ar-quente-ao-nascer-do-sol_335224-794.jpg",
            estrela: "⭐⭐⭐⭐⭐"
        },
    ]
    
  return (
    <div className='contairerHome'>
        <Header lido={lido} ler={ler} />
        <div className="minhas">
            <div className="vazioSection"></div>
            <div className="textSec">
                <p className="textsecminha">Minha Estante</p>
            </div>
        </div>
        <div className="favoritsContainer">
            <div className="menuCom"><Menu /></div>
            <div className="CardCom">
                {data.map((db)=>(

                    <Link to='/livro' className="card" key={db.id}>
                        <img className='imgCard' src={db.img} alt="" />
                        <span>{db.estrela}</span>
                    </Link>
                ))}
            </div>
        </div>
        <div className="minhas">
            <div className="vazioSection"></div>
            <div className="textSec">
                <p className="textsecminha">Últimas Avaliações</p>
            </div>
        </div>
        <div className="livrostext">
            <div className="cardAv">
                <div className="cardB">
                    <img className='imgCardB' src="https://img.freepik.com/fotos-gratis/paisagem-de-nevoeiro-matinal-e-montanhas-com-baloes-de-ar-quente-ao-nascer-do-sol_335224-794.jpg" alt="" />
                    <span>⭐⭐⭐⭐⭐</span>
                </div>
                <div className="texx">
                    <h3 className="textTitle">Título da Resenha</h3>
                    <p className="textPlorem">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quos earum commodi quasi ex adipisci. Amet facere
                        magni vel eos quia illo aperiam.
                    </p>
                </div>
            </div>
            <div className="cardAv">
                <div className="cardB">
                    <img className='imgCardB' src="https://img.freepik.com/fotos-gratis/paisagem-de-nevoeiro-matinal-e-montanhas-com-baloes-de-ar-quente-ao-nascer-do-sol_335224-794.jpg" alt="" />
                    <span>⭐⭐⭐⭐</span>
                </div>
                <div className="texx">
                    <h3 className="textTitle">Título da Resenha</h3>
                    <p className="textPlorem">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quos earum commodi quasi ex adipisci. Amet facere
                        magni vel eos quia illo aperiam.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
