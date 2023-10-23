import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [seconds, setSeconds]=useState(0);
    const [minutes, setMinutes]=useState(0);

    var timer;

    useEffect(()=>{

        timer = setInterval(()=>{
            setSeconds(seconds +1);

            if(seconds===59){
                setMinutes(minutes+1);
                setSeconds(0);
            }
        }, 1000)
        return ()=> clearInterval(timer);
    });

    const Reiniciar = () =>{
        setSeconds(0);
        setMinutes(0);
    }

    const Parar = () =>{
        clearInterval(timer);
    }

  return (
    <div className='Timer'>
        <div className='container'>
            <div className='timer_container'>
                <h1>Timer</h1>
                <h1>{minutes<10? "0"+minutes: minutes}:{seconds<10? "0"+seconds: seconds}</h1>

                <button className='Reiniciar' onClick={Reiniciar}>Reiniciar</button>
                <button className='Parar' onClick={Parar}>Parar</button>
            </div>
        </div>
    </div>
  )
}

export default Timer