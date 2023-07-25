import { useEffect, useState } from 'react'
import { traerFactRamdom } from '../services/traerFactRamdom'

export const useCatFact = () => {
  const [fact, setFact] = useState()

  const traerNewFact = () => {
    traerFactRamdom().then((newFact) => setFact(newFact))
  }

  useEffect(traerNewFact, [])

  return { fact, traerNewFact }
}
