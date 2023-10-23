import React from 'react'

const Input = () => {
  return (
    <div>
        <h1>Contador Truco</h1>
        <input className='inputPartida' type='number'></input>
        <button className='limitePartida'>Establecer limite</button>
    </div>
  )
}

export default Input