import axios from 'axios'
import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import './style.css'

export default function Cadastrar() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [text, setText] = useState("")
  const [cor, setCor] = useState("blue")
  const [ShowText, setShowText] = useState(false)
  let navigate = useNavigate()

  const saveUse = async()=>{
    try {
      const setNewUse = await axios.post("http://localhost:3000/user", {
        "nome":username,
        "senha":password
      })
      console.log(setNewUse)
    } catch (error) {
      console.log(error)
    }
  }

  const SetLogin = async(e)=>{
    e.preventDefault()
    try {
      const user = await axios.get(`http://localhost:3000/user?nome=${username}`)
      const useLenght = user.data.length;
      if(useLenght > 0){
        setShowText(true)
        setText("já Existe Usuário Com Este Nome 😩")
        setCor("red")
      }else{
        console.log("Pode cadastrar novo usuário!")
        saveUse()
        setShowText(true)
        setText("já Existe Usuário Com Este Nome 👌")
        setCor("verde")
        setTimeout(()=>{
          navigate('/')
          window.location.reload()
        }, 1500)
      }
    }catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='conteinerLogin'>
        {ShowText && (<div className="header" id={cor}><small>{text}</small></div>)}
        <form className='login' onSubmit={SetLogin}>
            <img src="./logo.png" alt="" className="logo" />
            <h3 className="loginText">Cadastrar</h3>
            <input type="text" className="nome" placeholder='Usuário' onChange={(e)=>setUsername(e.target.value)} minLength="2" required />
            <input type="password" className="email" placeholder='Senha' onChange={(e)=>setPassword(e.target.value)} minLength="2" required />
            <button className='ButtonEntrar' type='onsubmit'>Cadastrar</button>
            <div className="criarText">
                <h6 className="texx">Login</h6>
                <h6 className="termos">Termos & Políticas de Uso.</h6>
            </div>
        </form>
    </div>
  )
}
