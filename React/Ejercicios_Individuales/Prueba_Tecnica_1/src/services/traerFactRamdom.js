const FACT_URL = 'https://catfact.ninja/fact'

export const traerFactRamdom = () => {
  return fetch(FACT_URL)
    .then((respuesta) => respuesta.json())
    .then((data) => {
      const { fact } = data
      return fact
    })
}
