import React, { useContext } from 'react'
import styled from 'styled-components'
import BookingCalendar from '../booking_console/BookingCalendar'
import { BookingContext } from '../../context/BookingContext'


const BookingDetails = () => {
    const { booking, state } = useContext(BookingContext)
    return (
        <Container>
            <Head>Booking Details</Head>
            {booking && <BookingDetail><p>{`${booking.guests.adult} Adult  ||`}</p> <p>{`${booking.guests.children} Children ||`}</p> <p>{`${state.rooms} Rooms`}</p> </BookingDetail>}
            <BookingCalendar />
        </Container>
    )
}

export default BookingDetails

const Head = styled.h3`
    color:#EEF5FC;
`

const BookingDetail = styled.div`
    display:flex;
    justify-content:center;
    height:20px;
    width:100%;
    color:white;
    @media (max-width: 920px) {
        flex-direction:column;
        height:120px;
        width:50%;
    }
    @media (max-width: 375px) {
        flex-direction:row;
        width:100%;
        height:30px;
    }
`

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    width:100%;
    width:350px;
    height:350px;
    background-color:#021E39;
    @media (max-width: 920px) {
        flex-direction:row;
        width:500px;
        height:150px;
    }
    @media (max-width: 375px) {
        flex-direction:column;
        width:300px;
        height:200px;
    }
`


