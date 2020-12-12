import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'
import { BookingContext } from '../../context/BookingContext'
import StyledButton from '../../constant/StyledButton'
import moment from 'moment';
import useMediaQuery from '../../helpers/useMediaQuery'

const AvailableRoom = ({ type, img, text, label, price }) => {
    const media = useMediaQuery()

    const { addRoom, booking } = useContext(BookingContext)
    const { bookDates } = booking
    let nights = moment(bookDates.checkout_date).diff(moment(bookDates.checkin_date), 'days')

    const handleClick = () => {
        addRoom(type)
    }

    return (
        <RoomBox>
            <Image variant="top" src={img} />
            <CardBody>
                <Label bg={img}></Label><Span>{label}</Span>
                <Card.Text>
                    {text}
                </Card.Text>
                {nights && <Price>Starts with {price * nights}</Price>}
            </CardBody>
            <StyledButton name='SELECT' handleClick={handleClick} class={media && media.isMobile ? 'sm' : null} />
        </RoomBox>
    )
}

export default AvailableRoom


const RoomBox = styled(Card)`
    display:flex;
    flex-direction:row;
    width: 100%;
    margin:10px;
    padding:5px;
    @media (max-width: 920px) {
        font-size:0.8rem;
      }
    @media (max-width: 375px) {
        flex-direction:column;
      }
`

const Price = styled.div`
    background-color:#7FB3D5;
    font-weight:700;
    text-align:end;
    padding:3px;
    margin-top:70px;
`



const Label = styled(Card.Title)`
    background:url(${props => props.bg})no-repeat center center;
    background-size:cover;
    height:40px;
    color:white;
    text-align:center;  
    opacity:0.3;
    position:relative;
    @media (max-width: 375px) {
        margin-top:5px;
      }
`

const Span = styled.p`
    font-weight:700;
    font-size:1.5rem;
    margin-top:5px;
    background: -webkit-linear-gradient(#7FB3D5,#021E39);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position:absolute;
    left:55%;
    top:3px;
    @media (max-width: 920px) {
        font-size:1rem;
        left:50%;
      }
    @media (max-width: 375px) {
        left:30%;
        top:160px;
      }
`

const Image = styled(Card.Img)`
      width:300px;
      margin-right:7px;
      @media (max-width: 920px) {
        width:200px;
      }
      @media (max-width: 680px) {
        width:150px;
        height:150px;
        align-self:center;
      }
`

const CardBody = styled(Card.Body)`
      margin:0;
      padding:0;
`