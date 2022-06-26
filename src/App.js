import React, { useState} from 'react'
import './App.css';

function App() {
  const placeholders = [
                          'Ingresa una palabra',
                          'Mostrar las dos primeras letras',
                          'Mostrar las tres primeras letras',
                          'Mostrar las dos últimas letras',
                          'Mostrar la última letra',
                          'Limpiar'
                      ]
  const [input,setInput] = useState({ chain: "" })
  const [show,setShow] = useState({ show: "Acá va tu elección" })
  const handleInputChange = function (e) {
    //console.log("Estoy en change:",e.target.value)
      setInput(input => ({...input, chain: e.target.value }))
  }
  const handleOnClick = function (e) { 
    //console.log("Estoy en boton:", e.target.value)
   switch (e.target.value) {
       case "2pl":
           setShow(show => ({...show, show: input.chain.slice(0,2) }))
           break
       case "3pl":
           setShow(show => ({...show, show: input.chain.slice(0,3) }))
           break
       case "2ul":
           setShow(show => ({...show, show: input.chain.slice(-2) }))
           break
       case "ul":
           setShow(show => ({...show, show: input.chain.slice(-1) }))
           break
       case "clr":
           setInput(input => ({...input, chain: "" }))
           setShow(show => ({...show, show: "Acá va tu elección" }))
           break
       default:
           setShow(show => ({...show, show: "" }))
   }
  }
  return (
    <div class="main">
      <input class="input" type="text" value={input.chain} onChange={handleInputChange} placeholder={placeholders[0]}></input>
      <div>
        <button class="buttons" type="submit" value="2pl" onClick={handleOnClick}>{placeholders[1]}</button>
        <button class="buttons" type="submit" value="3pl" onClick={handleOnClick}>{placeholders[2]}</button>
        <button class="buttons" type="submit" value="2ul" onClick={handleOnClick}>{placeholders[3]}</button>
        <button class="buttons" type="submit" value="ul" onClick={handleOnClick}>{placeholders[4]}</button>
        <button class="buttons" type="submit" value="clr" onClick={handleOnClick}>{placeholders[5]}</button>
      </div>
      <div class="show">{show.show}</div>
    </div>
  )
  }
export default App
