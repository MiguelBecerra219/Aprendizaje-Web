const CAT_ENDPOINT_RAMDOM_FACT = 'https://catfact.ninja/fact'

export const getRamdomFact = () => {
  return fetch(CAT_ENDPOINT_RAMDOM_FACT)
    .then((res) => res.json())
    .then((data) => {
      const fact = data.fact
      return fact
    })
}
