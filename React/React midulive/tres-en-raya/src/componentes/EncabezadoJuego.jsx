export function EncabezadoJuego ({ resetGame }) {
  return (
    <section>
      <h1>Tres en raya</h1>
      <button onClick={resetGame}>Resetear juego</button>
    </section>
  )
}
