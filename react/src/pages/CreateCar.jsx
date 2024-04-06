import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'

export default function CreateCar() {
    const [car, setCar] = useState(null)
    const { id } = useParams()
    const nameRef = useRef()
    const colorRef = useRef()
    const yearRef = useRef()
    const numberPlateRef = useRef()

    const onSubmit = (ev) => {
        ev.preventDefault()
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" ref={nameRef} placeholder='Name' />
                <input type="text" ref={colorRef} placeholder='Color' />
                <input type="text" ref={yearRef} placeholder='Year' />
                <input type="text" ref={numberPlateRef} placeholder='Number Plate' />
                <button>{{  }}</button>
            </form>
        </div>
    )
}


