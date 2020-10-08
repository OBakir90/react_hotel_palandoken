import React from 'react'
import { useHistory } from 'react-router-dom'
import StyledButton from '../../constant/StyledButton'
import styled from 'styled-components'

const ApproveSelectedRoom = () => {
    let history = useHistory()

    const handleClick = () => {
        history.push(`/reservation`)
    }

    return (
        <Container>
            <StyledButton name='Aprrove' handleClick={handleClick} />
        </Container>
    )
}

export default ApproveSelectedRoom

const Container = styled.div`
    display:flex;
    justify-content:flex-end;
    background-color:#EEF5FC;
    padding:0 30px;
`