import React from 'react'
import Room from '../components/rooms/Room'
import { roomsList } from '../api/roomslist'
import styled from 'styled-components'
import hotel from '../assets/images/hotel1.jpg'
import Header from '../components/header/Header'

const Rooms = () => {
    return (
        <Screen>
            <Header color='#1A5276' />
            <HeadingBox />
            <Heading>OUR ROOMS</Heading>
            <Container>
                {roomsList &&
                    roomsList.map((room) => {
                        return (
                            <Room img={room.img} type={room.type} label={room.label} text={room.text} />
                        )
                    })
                }
            </Container>
        </Screen>
    )
}

export default Rooms

const HeadingBox = styled.div`
    background:url(${hotel}) no-repeat top center;
    position:relative;
    width:100%;
    height:80px;
    margin-top:0;
    opacity:0.5;
    @media (max-width: 768px) {
        height:50px;
      }
`

const Heading = styled.h1`
    position:absolute;
    top:90px;
    left:43%;
    color:#021E39;
    @media (max-width: 768px) {
        font-size:1.5rem;
        left:30%;
      }
`

const Screen = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    border-width:25px;
    border-style:solid;
    border-image:linear-gradient(
      to left, 
      #1A5276, 
      #021E39
    ) 5 100%;
    border-top:none;
`

const Container = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    width:80%;
    margin-top:20px
`