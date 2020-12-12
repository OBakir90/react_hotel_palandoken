import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { useClickedOutside } from '../../helpers/useClickedOutside'
import BookingBox from './BookingBox'

const Booking = () => {
    const [open, setOpen] = useState(false)

    const ref = useRef(null);
    useClickedOutside(ref, () => setOpen(false));


    return (
        <Container ref={ref}>
            {open && <BookingBox />}
            <BookNow className={open ? 'hide' : null} onClick={() => setOpen(true)}> BOOK NOW</BookNow >
        </Container >
    )
}

export default Booking;

const Container = styled.div`
    position:absolute;
    right:0;
    top:30%;
`

const BookNow = styled.p`
    margin:0;
    padding:10px 5px;
    writing-mode: vertical-rl;
    text-orientation: upright;
    background-color:#021E39;
    color:white;
    &.hide{
       display:none;
    }
`

