import { useState } from 'react'
import { TURNS } from '../constantes/constantes'
import { WinnerAlert } from './WinerAlert'
import { checkWinner, checkEndGame } from '../logic/board'
import { Board } from './Board'
import { MarcadorTurno } from './MarcadorTurno'
import { EncabezadoJuego } from './EncabezadoJuego'

function App () {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWiner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWiner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {
    if (board[index] || winner) { return }
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // cambiar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWiner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWiner(false)
    }
  }

  return (
    <main className='board'>

      <EncabezadoJuego resetGame={resetGame} />

      <Board board={board} updateBoard={updateBoard} />

      <MarcadorTurno turn={turn} />

      <WinnerAlert winner={winner} resetGame={resetGame} />

    </main>
  )
}

export default App
