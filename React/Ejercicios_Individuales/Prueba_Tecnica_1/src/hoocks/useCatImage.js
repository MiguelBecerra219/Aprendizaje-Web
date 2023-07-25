import { useState, useEffect } from 'react'

export function useCatImage ({ fact }) {
  const [imgURL, setImgURL] = useState()

  useEffect(() => {
    console.log(fact)
    if (!fact) return

    const primeraPalabra = fact.split(' ', 3)
    const urlImagen = `https://cataas.com/cat/says/${primeraPalabra[0]}?json=true`
    fetch(urlImagen)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        const newImgURL = 'https://cataas.com' + data.url
        setImgURL(newImgURL)
      })
  }, [fact])

  return { imgURL }
}
