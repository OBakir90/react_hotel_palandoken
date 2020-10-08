import React from 'react'
import { Card, Button } from 'react-bootstrap'
import styled from 'styled-components'

const Room = ({ type, img, text, label }) => {
    return (
        <RoomBox>
            <Label bg={img}></Label><Span>{label}</Span>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Text>
                    {text}
                </Card.Text>
                <StyledButton onClick='' variant='info'>View Details</StyledButton>
            </Card.Body>
        </RoomBox>
    )
}

export default Room

const RoomBox = styled(Card)`
    width: 28rem;
    margin:10px 5px;
`

const StyledButton = styled(Button)`
    position: absolute;
    left:35%;
    top:65%;
    color:white;
    font-weight:5 00;
    background-color:transparent;
    border:none;
    &:hover{
        background-color:transparent;
        border:0.5px solid black;
    }
    &:focus{
        background-color:transparent;
        border:0.5px solid black;
    }
    &:target{
        background-color:transparent;
        border:0.5px solid black;
    }
`


const Label = styled(Card.Title)`
    background:url(${props => props.bg})no-repeat center center;
    background-size:cover;
    height:50px;
    color:white;
    text-align:center;  
    opacity:0.3;
    position:relative;
`

const Span = styled.p`
    font-weight:700;
    font-size:1.5rem;
    margin-top:5px;
    background: -webkit-linear-gradient(#7FB3D5,#021E39);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position:absolute;
    left:40%;
    @media (max-width: 768px) {
        font-size:1.2rem;
        left:30%;
      }
`