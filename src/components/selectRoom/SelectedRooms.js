import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { BookingContext } from '../../context/BookingContext'
import ApproveSelectedRoom from './ApproveSelectedRoom'
import EditSelectedRoom from './EditSelectedRoom'

const SelectedRooms = () => {
    const [remained, setRemained] = useState()
    const { state } = useContext(BookingContext)

    useEffect(() => {
        setRemained(state.rooms - calcRoomsNo(state.roomTypes));
    }, [state])

    return (
        <Container>
            {remained > 0 && 'Please select ' + remained + ' ' + room(remained)}
            <SubCont>
                <EditSelectedRoom />
                {remained === 0 && <ApproveSelectedRoom />}
            </SubCont>
        </Container >
    )
}

export default SelectedRooms


const room = (n) => {
    let x = n > 1 ? 'rooms' : 'room';
    return x;
}

const calcRoomsNo = (obj) => {
    let rooms = 0, key;
    for (key in obj) {
        rooms += obj[key]
    }
    return rooms;
}

const Container = styled.div`
    width:100%;
    min-height:30px;
    background-color:#021E39;
    color:#EEF5FC;
`

const SubCont = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
`