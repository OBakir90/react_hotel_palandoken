import React, { useState } from 'react'
import styled from 'styled-components'
import BookingCalendar from './BookingCalendar'
import { Children, Adult } from './Dropdown'
import RoomNo from './RoomNo'
import CheckAvailability from './CheckAvailability'

const BookingBox = () => {
    const [bookDates, setBookDates] = useState({ checkin_date: null, checkout_date: null })
    const [guests, setGuests] = useState({ adult: 1, children: 0 })

    return (
        <BookBox>
            <Head>Booking Details</Head>
            <BookingCalendar bookDates={bookDates} setBookDates={setBookDates} />
            <Guests>
                <Adult guests={guests} setGuests={setGuests} />
                <Children guests={guests} setGuests={setGuests} />
            </Guests>
            <RoomNo />
            <CheckAvailability bookDates={bookDates} guests={guests} />
        </BookBox >
    )
}

export default BookingBox


const Head = styled.h3`
    color:#EEF5FC;
`

const BookBox = styled.div`
    display:flex;
    flex-direction:column;
    width:350px;
    height:350px;
    background-color:#021E39;
    align-items:center;
    border-radius:4px;
`

const Guests = styled.div`
    display:flex;
    margin-bottom:25px;
`