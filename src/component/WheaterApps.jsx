import { useState } from "react"

export const WheaterApps = () => {

    const [ciudad, setCiudad] = useState('')

    const handlerCiudad = (e) =>{
        setCiudad(e.target.value)
    }

    const handlerSubmit = (e) =>{
        e.preventDefault()
        if (ciudad.length > 0) fetchClima()
    }

    return (
        <div className="container">
            <h1>Aplicacion del clima</h1>
            <form action="" onSubmit={handlerSubmit}>
                <input 
                type="text"
                value={ciudad}
                onClick={handlerCiudad}
                />
                <button type="submit">Buscar</button>
            </form>
        </div>
    )
}


