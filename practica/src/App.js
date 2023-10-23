import './App.css';
import Button from './components/Button';
import Contador from './components/Contador';
import { Formulario } from './components/Formulario';
import { Home } from './components/Home';
import Input from './components/Input';
import Timer from './components/Timer';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState([""])

  return (
    <div className="App">
        <Contador/>
        <Timer/>
        <Input/>
        <Button/>
        {
        !user.length > 0
          ? <Formulario setUser={setUser} />
          : <Home user={user} setUser={setUser} />
      }
    </div>
  );
}

export default App;
