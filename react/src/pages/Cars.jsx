import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function Cars() {
    const [cars, setCars] = useState(null);

    useEffect(() => {
        axios.get("http://127.0.0.1:8001/api/cars")
            .then(res => {
                setCars(res.data)
            })
            .catch(error => {
                console.error("Error fetching data")
            })
    }, [])

    return (
        <div>
            <h1 className='text-2xl font-bold'>Cars</h1>
            {
                cars &&
                cars.map(car => (
                    <div>
                        <h3>
                            {car.name}
                        </h3>
                        <p>{car.color}, {car.year}, {car.number_plate}</p>
                    </div>
                ))
            }
        </div>
    )
}

