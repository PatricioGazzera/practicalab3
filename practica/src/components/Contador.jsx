import React, { useState } from 'react'

const Contador = () => {
const [Contador, setContador] = useState(0)

const restar = () =>{
    if(Contador > 0)
    setContador(Contador -1)
}
const reiniciar = () =>{
    setContador(0)
}
const sumar = () =>{
    setContador(Contador +1)
}

  return (
    <div>
        <h1>Contador</h1>
        <h2>{Contador}</h2>
        <button onClick={restar}>Restar</button>
        <button onClick={reiniciar}>Reiniciar</button>
        <button onClick={sumar}>Sumar</button>
    </div>
  )
}

export default Contador