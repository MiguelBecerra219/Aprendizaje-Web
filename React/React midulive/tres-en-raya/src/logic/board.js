import { WINNER_COMBOS } from '../constantes/constantes'

export const checkWinner = (boardToCkeck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo

    if (
      boardToCkeck[a] &&
            boardToCkeck[a] === boardToCkeck[b] &&
            boardToCkeck[a] === boardToCkeck[c]
    ) {
      return boardToCkeck[a]
    }
  }

  return null
}

export const checkEndGame = (newBoard) => {
  return newBoard.every((Square) => Square !== null)
}
