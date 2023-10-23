import { useState } from 'react'

export function Formulario({setUser}){
    const[nombre, setNombre] = useState("")
    const[contraseña, setContraseña] = useState("")
    const[error, setError] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        if(nombre === ""  || contraseña === ""){
            setError(true)
            return
        }
        if(contraseña.length < 5){
            setError(true)
            return "Al menos 6 caracteres"
        }

        setError(false)

        setUser([nombre])

    }

    return(
        <section>
            <h1>Login</h1>

            <form
                className='Formulario'
                onSubmit={handleSubmit}
             >
                <p>
                    <input
                        placeholder='Ingrese su usuario'
                        type="text"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </p>
                <input
                placeholder='Ingrese su contraseña'
                type="password"
                value={contraseña}
                onChange={e => setContraseña(e.target.value)}
                />
                <p>
                    <button>Iniciar Sesión</button>
                </p>
                
            </form>
            {error && <p>Todos los campos son obligatorios</p>}
        </section>
    )
}
