import React from 'react'
import './style.css'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Livro() {
  const [lido, setLido] = useState(130)
  const [ler, setLer] = useState(60)

  const AddLido = ()=>{
    setLido((prox)=> prox + 1)
  }
  const AddLer = ()=>{
    setLer((prox)=> prox + 1)
  }

  
  return (
    <div className='contairerHome'>
        <Header lido={lido} ler={ler} />
        <div className="minhas">
            <div className="vazioSection"></div>
            <div className="textSec">
                <p className="textsecminha">Resenha</p>
            </div>
        </div>
        <div className="favoritsContainer">
            <div className="menuCom"><Menu /></div>
            <div className="CardCom">
                <div className="cardAvv">
                    <div className="cardBb">
                        <img className='imgCardBb' src="https://img.freepik.com/fotos-gratis/paisagem-de-nevoeiro-matinal-e-montanhas-com-baloes-de-ar-quente-ao-nascer-do-sol_335224-794.jpg" alt="" />
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
                
            </div>
        </div>

        <div className="minhas">
            <div className="vazioSection"></div>
            <div className="textSecB">
                <div className="ler" onClick={AddLido}>Marcar como lido</div>
                <div className="lermaistard" onClick={AddLer}>Vou ler</div>
                <Link to='/' className="lermaistard">Voltar</Link>
            </div>
        </div>
    </div>
  )
}
