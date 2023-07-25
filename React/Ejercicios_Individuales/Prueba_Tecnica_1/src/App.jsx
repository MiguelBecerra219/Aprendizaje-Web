import { useCatFact } from './hoocks/useCatFact'
import { useCatImage } from './hoocks/useCatImage'

export function App () {
  const { fact, traerNewFact } = useCatFact()
  const { imgURL } = useCatImage({ fact })

  return (
    <main>
      <h1>App de gatos</h1>
      {fact && <p>{fact}</p>}
      {imgURL && <img src={imgURL} alt={`Imagen traida de la API https://catfact.ninja con la palabra del ${fact}`} />}
      <button onClick={traerNewFact}>Recargar</button>
    </main>
  )
}
