import React, { useContext } from 'react'
import styled from 'styled-components'
import { BookingContext } from '../../context/BookingContext'

const RoomNo = () => {
    const { booking, getDecrement, getIncrement, state } = useContext(BookingContext)
    console.log('ssss', state)
    return (
        <Container>
            <Label htmlFor="name">Rooms</Label>
            <div>
                <Button onClick={getDecrement}>-</Button>
                <Input id="room" min="0" required value={state.rooms} />
                <Button onClick={getIncrement}>+</Button>
            </div>
        </Container>
    )
}

export default RoomNo

const Container = styled.div`
    display:flex;
    margin-bottom:10px;
`

const Label = styled.p`
    color:#EEF5FC;
    font-size: 1.2rem;
    margin:5px;
`
const Input = styled.input`
    width:40px;
    height:40px;
    border-radius:10px;
`

const Button = styled.button`
    
`