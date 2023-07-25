import { useState, useEffect } from "react"

const API_FACT = 'https://catfact.ninja/fact'

export function App(){ 

    const [fact, setFact] = useState()

    useEffect(() => {
        fetch(API_FACT)
           .then(respuesta => respuesta.json())
            .then(json => {
                const { fact } = json
                setFact(fact)})
    },[])

    return(
        <main>
            <h1>App de gatos</h1>
            {fact && <p>{fact}</p>}
        </main>
    )
}