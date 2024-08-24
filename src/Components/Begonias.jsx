import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Begonia from './Begonia'
import "../CSS/Begonias.css"

// Application Programming Interface. - helps different programs communicate with each other and share info. import.meta.env - object provided by VITE to access environment variables. 
//VITE_API_URL - a URL pointing to an API endpoint app interacts with.
const API = import.meta.env.VITE_API_URL

export default function Begonias() {
    const [begonias, setBegonias] = useState([])

    useEffect(() => {
        fetch(`${API}/begonias`) // change endpoint to fetch begonias
            .then((res) => res.json())
            .then(resJSON => {
                console.log(resJSON)
                setBegonias(resJSON) // update state with fetched begonias data
            })
            .catch((error) => console.error(error))
    }, [])

    return (
        <div className="Begonias"> {/* update class name to match begonia styles */}
            <h1>Begonias Directory</h1>
            {begonias.map(begonia => {
                return <Begonia key={begonia.id} begonia={begonia} /> // update to use Begonia component
            })}
        </div>
    )
}


//React is an open-source third party front-end framework that makes developing and maintaining large and robust front-end applications easier. It's use to build web applications' User Interface and front-end logic.
//DOM - Document object model.
//JSX - extends the syntax of JavaScript to create dynamic HTML components;
// For some app, API keys are needed to use a third party service.
//Props allow component to pass information to child components that they are rendering.
//Rendering - process of generating and displaying the visual output of a component in a React Application