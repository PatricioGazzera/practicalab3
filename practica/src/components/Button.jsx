import React, { useEffect, useState } from 'react'

const Button = () => {

    const [Contador1, setContador1] = useState(0)
    const [Contador2, setContador2] = useState(0)

    const handleLogOut = () =>{
        setContador1(0)
        setContador2(0)
    }
    
    const sumar1 = () =>{
        setContador1(Contador1 +1)
    }

    const restar1 = () =>{
        if(Contador1 > 0)
        setContador1(Contador1 -1)
    }

    const restar2 = () =>{
        if(Contador2 > 0)
        setContador2(Contador2 -1)
    }

    const sumar2 = () =>{
        setContador2(Contador2 +1)
    }

    const reiniciar1 = () =>{
        setContador1(0)
    }

    const reiniciar2 = () =>{
        setContador2(0)
    }
    if(Contador1 === 30 || Contador2 === 30){
        return(
            <div>
                <h1>Partida finalizada</h1>
                <button onClick={handleLogOut}>Jugar de nuevo</button>
            </div>
        )
    }

  return (
    <div>
        <h2>(equipo 1) {Contador1} - {Contador2} (equipo 2)</h2>
        <p>
        <button className='puntaje1' onClick={sumar1}>Sumar equipo 1</button>
        <button className='puntaje2' onClick={sumar2}>Sumar equipo 2</button>
        </p>
        <p>
            <button className='restar1' onClick={restar1}>Restar equipo 1</button>
            <button className='restar2' onClick={restar2}>Restar equipo 2</button>
        </p>
        <p>
        <button className='reiniciar1' onClick={reiniciar1}>Reiniciar equipo 1</button>
        <button className='reiniciar2' onClick={reiniciar2}>Reiniciar equipo 2</button>
        </p>
    </div>
  )
}

export default Button