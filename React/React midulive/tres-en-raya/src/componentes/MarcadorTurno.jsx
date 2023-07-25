import { TURNS } from '../constantes/constantes'
import { Square } from './Square'

export function MarcadorTurno ({ turn }) {
  return (
    <section className='turn'>
      <Square
        isSelected={turn === TURNS.X}
      >
        {TURNS.X}
      </Square>
      <Square isSelected={turn === TURNS.O}>
        {TURNS.O}
      </Square>
    </section>
  )
}
