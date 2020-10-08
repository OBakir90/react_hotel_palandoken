import React from 'react'
import styled from 'styled-components'
import { roomsList } from '../api/roomslist'
import AvailableRoom from '../components/selectRoom/AvailableRoom'
import BookingDetails from '../components/selectRoom/BookingDetails'
import SelectedRooms from '../components/selectRoom/SelectedRooms'
import hotel from '../assets/images/hotel2.jpg'


const AvailableRooms = ({ checkRes }) => {
    return (
        <Screen>
            <Container >
                <LeftSide>
                    <BookingDetails />
                </LeftSide>
                <RightSide>
                    <Header>SELECT YOUR ROOM</Header>
                    <SelectedRooms />
                    {roomsList &&
                        roomsList.map((room) => {
                            return (
                                <AvailableRoom img={room.img} type={room.type} label={room.label} text={room.text} price={room.price} />
                            )
                        })
                    }
                </RightSide>
            </Container>
        </Screen>
    )
}

export default AvailableRooms


const Screen = styled.div`
    display:flex;
    min-height:100vh;
    flex-direction:column;
    align-items:center;
    background:url(${hotel}) no-repeat center 90% fixed;
    background-size:cover;
   
`

const Container = styled.div`
    display:flex;
    align-items:center;
    width:90%;
    min-height:100vh;
    background:rgba(255, 255, 255, 0.6) none repeat scroll 0 0;
    @media (max-width: 920px) {
        flex-direction:column;
    }
`

const Header = styled.p`
    font-weight:600;
    font-size:2rem;
    color:#021E39;
    @media (max-width: 920px) {
        font-size:1.5rem;
    }
    @media (max-width: 375px) {
        font-size:1.2rem;
    }
`

const RightSide = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:70%;
    margin:30px 10px 0 0;
`

const LeftSide = styled.div`
    display:flex;
    align-items:flex-start;
    width:30%;
    margin-left:10px;
    min-height:100vh;
    @media (max-width: 920px) {
        min-height:100px;
        width:100%;
        padding-top:30px;
        justify-content:center;
    }
`