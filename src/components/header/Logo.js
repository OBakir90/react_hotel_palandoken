import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/images/logo.jpg'

const LogoName = ({ color }) => {
    return (
        <Container>
            <Logo src={logo} color={color} />
            <Name to='/' color={color}>PALANDOKEN</Name>
        </Container>
    )
}

export default LogoName

const Container = styled.div`
    display:flex;
    justify-content:flex-start;
`

const Logo = styled.img`
    width:90px;
    height:60px;
    border-radius:50%;
    margin-left:10px;
    @media (max-width: 680px) {
        width:75px;
        height:45px;
    }
`

const Name = styled(Link)`
    text-decoration:none;
    font-weight:bold;
    font-size:2rem;
    color:${props => props.color || '#EFF3F7'};
    font-family: 'Yellowtail', cursive;
    &:hover{
        text-decoration:none;
        color:${props => props.color || '#EFF3F7'};
    }
    @media (max-width: 680px) {
        font-size:1.5rem;
    }
    @media (max-width: 375px) {
        font-size:1rem;

    }
`