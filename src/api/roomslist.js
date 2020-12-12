import king from '../assets/images/room5.jpg'
import premium from '../assets/images/room2.jpg'
import superior from '../assets/images/room6.jpg'
import family from '../assets/images/room11.jpg'
import suit from '../assets/images/room8.jpg'


export const roomsList = [
    {
        label: 'King Superior',
        type: 'king',
        price: 300,
        img: king,
        capacity: {
            adult: 2,
            children: 1
        },
        occupied: {
            checkin_date: '',
            checkout_date: ''
        },
        text: 'Our 174 Superior Rooms are all at least 45 sqm in size and combine alpine charm with superior comfort.'
    },
    {
        label: 'Superior',
        type: 'superior',
        price: 250,
        img: superior,
        capacity: {
            adult: 2,
            children: 1
        },
        occupied: {
            checkin_date: '',
            checkout_date: ''
        },
        text: 'Our 174 Superior Rooms are all at least 35 sqm in size and combine alpine charm with superior comfort.'
    },
    {
        label: 'Premium',
        type: 'premium',
        price: 220,
        img: premium,
        capacity: {
            adult: 2,
            children: 1
        },
        occupied: {
            checkin_date: '',
            checkout_date: ''
        },
        text: 'Our 174 Superior Rooms are all at least 35 sqm in size and combine alpine charm with superior comfort.'
    },
    {
        label: 'Family',
        type: 'family',
        price: 220,
        img: family,
        capacity: {
            adult: 2,
            children: 2
        },
        occupied: {
            checkin_date: '',
            checkout_date: ''
        },
        text: 'Our 174 Superior Rooms are all at least 35 sqm in size and combine alpine charm with superior comfort.'
    },
    {
        label: 'Suit',
        type: 'suit',
        price: 150,
        img: suit,
        capacity: {
            adult: 2,
            children: 1
        },
        occupied: {
            checkin_date: '',
            checkout_date: ''
        },
        text: 'Our 174 Superior Rooms are all at least 35 sqm in size and combine alpine charm with superior comfort.'
    }

]


