import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style.css'

export default function JogoEscolha({
    data,
    // setStop,
    questionNumber,
    setQuestionNumber,
}) {
    

    const [question, setQuestion] = useState(null)
    const [valorinp, setvVlorinp] = useState(null)
    const [ver, setVer] = useState(false)
    const [verText, setVerText] = useState("")
    const [className, setClassName] = useState("answer")
    const [selectedAnswer, setSelectedAnswer] = useState(null)

    useEffect(()=>{
        setQuestion(data[questionNumber-1]);
    }, [data, questionNumber])

    const delay = (duration, callback)=>{
        setTimeout(()=>{
            callback()
        }, duration)
    }

    const handleClick = (a)=>{
        setSelectedAnswer(a)
        setVerText("")
        setClassName("answer active")
        delay(500, ()=> 
            setClassName(a.correct ? "answer correct" : "answer wrong"))
        delay(4000, ()=> 
            {
                if(a.correct){
                    setVerText("😘")
                    delay(1000, ()=>{
                        setQuestionNumber((prev)=> prev + 1)
                        setSelectedAnswer(null)
                        setVerText("")
                    })
                }else{
                    setVerText("😓")
                }
            }
        )
        
    }
    const handleClickInput = (a)=>{
        setSelectedAnswer(a)
        setVerText("")
        setClassName("answer active")
        console.log(a)
        var valorCheck = a.replace(/ /g, '');
        console.log(valorCheck)
        
        delay(500, ()=> 
            setClassName(valorCheck === question.resposta[0].text ? "answer correct" : "answer wrong"))
        delay(4000, ()=> 
            {
                if(valorCheck === question.resposta[0].text){
                    setVerText("😘")
                    delay(1000, ()=>{
                        setvVlorinp("")
                        setQuestionNumber((prev)=> prev + 1)
                        setSelectedAnswer(null)
                        setVerText("")
                    })
                }else{
                    setVerText("😓")
                }
            }
        )
        
    }
    const goPergunta = ()=>{
        setvVlorinp("")
        setQuestionNumber((prev)=> prev + 1)
        setSelectedAnswer(null)
        setVerText("")
    }
    
  return (
    <div className='escoContent'>
        <div className="conteinerEsc">
            <div className={question?.tipo === "img" ? "newNone" : "perguntacont"} >
                <p className={question?.tipo === "img" ? "newNone" : "pergunta"}>{question?.question  +verText}</p>
            </div>
            {question?.tipo === "button" && (
                <div className="answers">
                    {question?.resposta.map((a) => (
                        <div key={a.text} className={selectedAnswer === a ? className : "answer"} onClick={()=> handleClick(a)}>{a?.text}</div>
                    ))}
                </div>
            )}
            {question?.tipo === "input" &&(
                <div className="respostaEscolha">
                    <input type="text" onChange={(e)=>setvVlorinp(e.target.value)} className="inpTextEscolha" />
                    <button className="Proximo" onClick={()=>handleClickInput(valorinp)}>Next</button>
                </div>
            )}
            {question?.tipo === "img" &&(
                <>
                    <img src={question.url} alt="" className="contImg" />
                    <div className="buttonNext">
                        <div className="btn">
                            <button className="next" onClick={goPergunta}>Next</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    </div>
  )
}
