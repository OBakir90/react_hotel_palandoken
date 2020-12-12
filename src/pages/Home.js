import React from 'react'
import hotel1 from '../assets/images/hotel3.jpg'
import styled, { keyframes } from 'styled-components'

import Header from '../components/header/Header'
import Booking from '../components/booking_console/Booking'


const Home = () => {
    return (
        <Screen>
            <Header />
            <Booking />
        </Screen>
    )
}

export default Home

// const bgmain = keyframes`
//     0% {
//         background-image:url(${hotel1}) ;
//     }
//     100% {
//         background-image:url(${hotel2});
//     }
// animation:${bgmain} ease 20s both infinite;
// `

const Screen = styled.div`
    width:100%;
    min-height:100vh;
    background:url(${hotel1}) no-repeat center 90%;
    background-size:cover;
    position:relative;
 
`