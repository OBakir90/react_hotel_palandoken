import React, { useContext } from 'react'
import styled from 'styled-components'
import StyledButton from '../../constant/StyledButton'
import { BookingContext } from '../../context/BookingContext'

const EditSelectedRoom = () => {
    const { state, deleteRoom } = useContext(BookingContext)

    const handleClick = (type) => {
        deleteRoom(type)
    }

    return (
        <Container>
            {state.roomTypes && Object.keys(state.roomTypes).map((type, i) => {
                return <SubCon key={i}>
                    <Text><p>{type.toUpperCase()}</p> <p>{state.roomTypes[type]}</p></Text>
                    <StyledButton name='DELETE' class='sm' handleClick={() => handleClick(type)} />
                </SubCon>
            })}
        </Container>
    )
}

export default EditSelectedRoom

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    background-color:#EEF5FC;
    width:100%;
`

const SubCon = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
    border:0.5px solid white;
`

const Text = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-weight:600;
    color:#021E39;
    height:100%;
    width:100%;
    margin:10px 15px 0 15px;
    @media (max-width: 680px) {
        font-size:0.7rem;
      }
`