import { useCatFact } from './services/hooks/useCatFact.js'
import { useCatImage } from './services/hooks/useCatImg.js'

export function App () {
  const { fact, refreshRamdonFact } = useCatFact()
  const { img } = useCatImage({ fact })

  const handleClick = async () => {
    refreshRamdonFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {img && <img src={img} alt={`imagen extraida usando la primera palabra de ${fact}`} />}

      <button onClick={handleClick}>Recargar</button>
    </main>
  )
}
