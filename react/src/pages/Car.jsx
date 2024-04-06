import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


export default function Car() {
    const [car, setCar] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        axios.get('http://127.0.0.1:8001/api/cars/' + id)
            .then(res => {
                setCar(res.data.data)
            })
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            {
                car &&
                <div>
                    <h1>{car.name}</h1>
                    <p>Year: {car.year}</p>
                    <p>Color: {car.color}</p>
                    <p>Plate number: {car.number_plate}</p>
                </div>
            }
        </div>
    )
}
