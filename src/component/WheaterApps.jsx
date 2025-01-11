import { useState } from "react"

export const WheaterApps = () => {

    const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
    const ApiKey = '7c4ba064b92222cb8c9a3354cbaf8617'
    const difkelvin = 273.15

    const [ciudad, setCiudad] = useState('')
    const [dataClima, setDataClima] = useState(null)

    const handleCambioCiudad = (e) => {
        setCiudad(e.target.value)
    }

    const handlerSubmit = (e) => {
        console.log('aca')
        e.preventDefault()
        if (ciudad.length > 0) fetchClima()
    }

    const fetchClima = async () => {
        try {
            const response = await fetch(`${urlBase}?q=${ciudad}&appid=${ApiKey}`)
            const data = await response.json()
            setDataClima(data)
        } catch (error) {
            console.error(`Ocurrio el siguiente problema > ${error}`)
        }
    }

    return (
        <div className="container">
            <h1>Aplicacion del clima</h1>
            <form onSubmit={handlerSubmit}>
                <input
                    type="text"
                    value={ciudad}
                    onChange={handleCambioCiudad}
                />
                <button type="submit">Buscar</button>
            </form>
            {
                dataClima && (
                    <div class="card">
                        <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} alt="clima"/>
                            <div class="cont">
                                <h3><b>{dataClima.name}</b></h3>
                                <p><b>Condiciones meteorologicas:</b> {dataClima.weather[0].description}</p>
                                <p><b>Temperatura:</b> {parseInt(dataClima.main.temp - difkelvin)}C - Max {parseInt(dataClima.main.temp_max - difkelvin)}C / Min {parseInt(dataClima.main.temp_min - difkelvin)}C</p>
                                <p><b>Viento:</b> {dataClima.wind.speed} - Direccion: {dataClima.wind.grados} </p>
                            </div>
                    </div>
                )
            }
        </div>
    )
}


