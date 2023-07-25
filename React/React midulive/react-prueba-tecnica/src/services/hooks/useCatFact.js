import { useState, useEffect } from 'react'
import { getRamdomFact } from '../facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshRamdonFact = () => {
    getRamdomFact().then((newFact) => setFact(newFact))
  }

  useEffect(refreshRamdonFact, [])
  return { fact, refreshRamdonFact }
}
