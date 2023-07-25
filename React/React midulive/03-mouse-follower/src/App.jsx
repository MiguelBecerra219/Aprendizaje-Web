import React, { useEffect, useState } from 'react'

function App () {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enable) {
      window.addEventListener('pointermove', handleMove)
      console.log('añadido')
    }

    // esta funcion se ejecutara cuando el componente de la dependencia se borre
    // o cuando se renderice de nuevo, una ves el componente se renderice se ejecuta
    // la funcion y luego se ejecuta de nuevo el effect
    return () => {
      console.log('removido')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enable])

  const cambioEstado = () => {
    setEnable(!enable)
    console.log(enable)
  }

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <h1>hola mundo</h1>
      <button onClick={cambioEstado}>{enable ? 'Desacivar' : 'Activar'} Segimiento Del Puntero</button>
    </main>
  )
}

export default App
