export function Home ({user, setUser}) {

    const handleLogOut = () =>{
        setUser([])
    }
    return(
        <div>
            <h1>Bienvenido</h1>
            <h2>{user}</h2>
            <button onClick={handleLogOut}>Cerrar Sesion</button>
        </div>
    )
}