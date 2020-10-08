import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap'
import { BookingContext } from '../../context/BookingContext'

const CheckAvailability = () => {
    const { booking, setBooking } = useContext(BookingContext)
    let history = useHistory()

    const handleAvailability = () => {
        booking.bookDates.checkin_date && booking.bookDates.checkout_date && history.push(`/availablerooms`)
    }

    return (
        <Button variant="secondary" onClick={handleAvailability}>Check Availability</Button>
    )
}

export default CheckAvailability
