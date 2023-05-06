import React from 'react'
import './style.css'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Header({lido, ler}) {
    const [lidos, setLidos] = useState(lido)
    const [lerr, setLerr] = useState(ler)


    useEffect(()=>{
        const SetValors = ()=>{
            setLidos(lido)
            setLerr(ler)
        }

        SetValors()
    }, [lido, ler])


  return (
    <div className='headerSection'>
        <div className="usuarioContent">
            <img src="https://scontent-for1-1.xx.fbcdn.net/v/t39.30808-6/341537598_890827775337711_1847313765304486760_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pMt6dt-xHOIAX8BkdVz&_nc_ht=scontent-for1-1.xx&oh=00_AfDMaoFM5rGAfinNsyaQB-VbxSzd1AiZFQNoVoTRrPDG4Q&oe=645BAAAB" alt="" className="imguser" />
            <span className="user">Marisa Edna</span>
        </div>
        <div className="li">
            <h2 className="texr">{lidos}</h2>
            <h2 className="number">lidos</h2>
        </div>
        <div className="li">
            <h2 className="texr">{lerr}</h2>
            <h2 className="number">vou ler</h2>
        </div>
        <div className="li">
            <div className="vazia"></div>
        </div>
        <div className="li">
            <div className="vazia"></div>
        </div>
    </div>
  )
}
