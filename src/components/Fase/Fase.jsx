import axios from 'axios'
import React, { useEffect, useState } from 'react'
import JogoEscolha from '../jogoEscolha/JogoEscolha'
import './style.css'

export default function Fase() {
    const [show, setshow] = useState(true)
    const [nfase, setNfase] = useState(0)
    const [img, setImg] = useState("")
    const [fase, setFase] = useState([])

    const [questionNumber, setQuestionNumber] = useState(1)

//     useEffect(()=>{
//     questionNumber > 1 && setEarner(moneyPyramid.find(m=> m.id === questionNumber - 1).amount)
//   }, [ questionNumber])

    const data = [
        {
          id: 1,
          question: "O que é uma Linguagem de Programação?",
          tipo: "button",
          resposta: [
            {
              text: "Linguagem de Computador",
              correct: false,
            },
            {
              text: "Linguagem Humana",
              correct: false,
            },
            {
              text: "Linguagem Animal",
              correct: false,
            },
            {
              text: "Linguagem de Alto Nível",
              correct: true,
            },
          ],
        },
        {
          id: 2,
          question: "Digite sem espaço a palavra que simboliza o tipo inteiro em C.",
          tipo: "input",
          resposta: [
            {
              text: "int",
              correct: true,
            },
          ],
        },
        {
          id: 1,
          question: "Como declarar uma Variável do tipo inteiro?",
          tipo: "button",
          resposta: [
            {
              text: "Int x",
              correct: false,
            },
            {
              text: "Inteiro x;",
              correct: false,
            },
            {
              text: "int x;",
              correct: true,
            },
            {
              text: "inteiro x",
              correct: false,
            },
          ],
        },
        {
          id: 4,
          question: "Declare uma variável do tipo realC, com o nome Aluno e com valor 100.20",
          tipo: "input",
          resposta: [
            {
              text: "floatAluno=100.20;",
              correct: true,
            },
          ],
        },
        {
          id: 5,
          question: "Qual a forma correta de declarar uma variável para caracteres com o nome Palavra?",
          tipo: "button",
          resposta: [
            {
              text: "caractere Palavra;",
              correct: false,
            },
            {
              text: "char Palavra;",
              correct: true,
            },
            {
              text: "char Palavra",
              correct: false,
            },
            {
              text: "caract Palavra;",
              correct: false,
            },
          ],
        },
        {
          id: 6,
          question: "Declare uma variável do tipo realC, com o nome Aluno e com valor 100.20",
          tipo: "img",
          url: "./fase1.png",
          resposta: [
            {
              text: "floatAluno=100.20;",
              correct: true,
            },
          ],
        }
    ]

    const getImg = (data)=>{
        setImg(data.img)
    }
    
    
    useEffect(()=>{
        setshow(true)
        const getFases = async()=>{
            try {
                const Efase = await axios.get("http://localhost:3000/fases");
                setFase(Efase.data[nfase])
                getImg(Efase.data[nfase])
            } catch (error) {
                console.log(error)
            }
        }
        getFases()
    }, [])

    const goPergunta = ()=>{
        setshow(false)
    }

  return (
    <div className="con">
        {show ? (
            <>
            <img src={img} alt="" className="contImg" />
            <div className="buttonNext">
                <div className="btn">
                    <button className="next" onClick={goPergunta}>Next</button>
                </div>
            </div>
            </>
        )
        :(
            // <JogoEscolha nfase={nfase}  />
            <JogoEscolha 
                data={data} 
                // setStop={setStop} 
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                />
        )}
    </div>
  )
}
