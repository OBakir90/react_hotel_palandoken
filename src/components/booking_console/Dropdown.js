import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import { BookingContext } from '../../context/BookingContext'

export const Adult = () => {
    const { booking, setBooking } = useContext(BookingContext)

    const handleAdult = (e) => {
        setBooking({ ...booking, guests: { ...booking.guests, adult: e.target.value } })
    }

    return (
        <>
            <Type>Adult</Type>
            <Select id="adult" name="adult" onChange={handleAdult}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </Select>
        </>
    )
}

export const Children = () => {
    const { booking, setBooking } = useContext(BookingContext)

    const handleChildren = (e) => {
        setBooking({ ...booking, guests: { ...booking.guests, children: e.target.value } })
    }

    return (
        <>
            <Type>Children</Type>
            <Select id="children" name="children" onChange={handleChildren}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </Select>
        </>
    )
}


const Type = styled.p`
    color:#EEF5FC;
    font-size:1.2rem;
    margin:5px;
`

const Select = styled.select`
    border-radius:10px;
`

