import React, { useState } from 'react'

const Boton = () => {

    const[contador1, setContador1] = useState(0)
    const[contador2, setContador2] = useState(0)

    const handleLogOut = () =>{
        setContador1(0)
        setContador2(0)
    }

    const sumar1 = ()=>{
        setContador1(contador1 +1)
    }

    const sumar2 = ()=>{
        setContador2(contador2 +1)
    }

    const restar1 = ()=>{
        if(contador1 > 0)
        setContador1(contador1 -1)
    }

    const restar2 = ()=>{
        if(contador2 > 0)
        setContador2(contador2 -1)
    }

    const reiniciar1 = () =>{
        setContador1(0)
    }

    const reiniciar2 = () =>{
        setContador2(0)
    }

    if( contador1 === 30){
        return(
            <div>
                <h1>Gano el equipo 1</h1>
                <button onClick={handleLogOut}>Jugar de nuevo</button>
            </div>
        )
    }

    if(contador2 === 30){
        return(
            <div>
                <h1>Gano el equipo 2</h1>
                <button onClick={handleLogOut}>Jugar de nuevo</button>
            </div>
        )
    }

  return (
    <div>
        <h1> Contador truco</h1>
        <h2>(Equipo 1) {contador1} - {contador2} (Equipo 2)</h2>
        <p>
            <button className='sumar1' onClick={sumar1}>Sumar equipo 1</button>
            <button className='sumar2' onClick={sumar2}>Sumar equipo 2</button>
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

export default Boton