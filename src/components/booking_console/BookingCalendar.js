import React, { useState, useEffect, useContext } from 'react'
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { formatDate, parseDate } from 'react-day-picker/moment';
import moment from 'moment';
import styled from 'styled-components'
import { BookingContext } from '../../context/BookingContext'

const BookingCalendar = () => {
    const { booking, setBooking } = useContext(BookingContext)
    const [from, setFrom] = useState(null)
    const [to, setTo] = useState(null)

    useEffect(() => {
        setBooking({ ...booking, bookDates: { checkin_date: from, checkout_date: to } })
    }, [from, to])

    useEffect(() => {
        booking && setFrom(booking.bookDates.checkin_date)
        booking && setTo(booking.bookDates.checkout_date)
    }, [])

    const modifiers = {
        weekends: { daysOfWeek: [0, 6] },
        start: from,
        end: to
    }

    const modifiersStyles = {
        weekends: {
            color: 'gray'
        }
    }

    const showFromMonth = () => {
        if (!from) {
            return;
        }
        if (moment(to).diff(moment(from), 'months' < 2)) {
            to.getDayPicker().showMonth(from)
        }
    }

    const handleFromChange = (from) => {
        setFrom(from)
    }

    const handleToChange = (to) => {
        setTo(to)
    }


    return (
        <Container>
            <DayPickerInput
                value={from}
                placeholder="Checkin Date"
                formatDate={formatDate}
                parseDate={parseDate}
                dayPickerProps={{
                    selectedDays: [from, { from, to }],
                    disabledDays: { before: new Date() },
                    toMonth: to,
                    modifiers,
                    numberOfMonths: 1,
                    modifiersStyles: modifiersStyles,
                    daySize: 10
                }}
                onDayChange={handleFromChange}
            />
            <DayPickerInput
                value={to}
                placeholder="Checkout Date"
                formatDate={formatDate}
                parseDate={parseDate}
                dayPickerProps={{
                    selectedDays: [from, { from, to }],
                    disabledDays: { before: from },
                    month: from,
                    fromMonth: from,
                    modifiers,
                    numberOfMonths: 1,
                    modifiersStyles: modifiersStyles,
                }}
                onDayChange={handleToChange}
            />
        </Container>
    )
}

export default BookingCalendar


const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin:20px 40px 20px 0;
`