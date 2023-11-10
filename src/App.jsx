import { useState } from 'react'
import './App.css'
import ProfileCard from "./components/ProfileCard"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h3>Agregar productos a tu carrito</h3>
      </div>
      <div className="card">
      <ProfileCard titulo="Castañas de Cajú" arroba="100gr"/>
        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          -
        </button>
        <p>{count}</p>
      </div>

    </>
  )
}

export default App
