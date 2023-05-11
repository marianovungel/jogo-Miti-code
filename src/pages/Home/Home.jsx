import React from 'react'
import './style.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Card/Footer'

export default function Home() {

  return (
    <div className='contairerHome'>
        <Header />
        <div className="contentCompra">
          <div className="vaziaCompra"></div>
          <div className="contenCard">
            <div className="card">
              <h1 className="headerone">Lamborghini</h1>
              <div className="precos">
                <h1 className="headerTwo">R$10000,00</h1>
                <h1 className="headerTwo vermelho">R$10000,00</h1>
              </div>
              <div className="text">
                <p className="textCard">
                  Lorem ipsum dolor sit amet, consectetur 
                  adipisicing elit. Iusto nisi maxime nesciunt 
                  error ab exercitationem odio ad modi eveniet esse, 
                  nostrum consequatur ducimus temporibus necessitatibus 
                  distinctio doloribus omnis reiciendis nam.
                </p>
              </div>
              <div className="buttonCard">
                <button className='button'>Comprar Agora...</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}
