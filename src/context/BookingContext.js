import React, { useState, useReducer } from 'react'

export const BookingContext = React.createContext();

export const BookingProvider = ({ children }) => {
    const [booking, setBooking] = useState({ bookDates: { checkin_date: null, checkout_date: null }, guests: { adult: 1, children: 0 } })

    const initialState = {
        rooms: 1,
        roomTypes: {}
    }

    const [state, dispatch] = useReducer(roomReducer, initialState);

    const addRoom = (types) => {
        if (state.rooms > calcRoomsNo(state.roomTypes)) {
            state.roomTypes[types] && dispatch({ type: 'ADD_ROOM', payload: types })
            !state.roomTypes[types] && dispatch({ type: 'ADD_NEW_ROOM', payload: types })
        }
    }

    const deleteRoom = (type) => {
        if (state.roomTypes[type] > 1) {
            console.log('delete-room')
            state.roomTypes[type] && dispatch({ type: 'DELETE_ROOM', payload: type })
        } else if (state.roomTypes[type] === 1) {
            delete state.roomTypes[type] && dispatch({ type: 'CURRENT_ROOMS' })
        }
    }

    const getIncrement = () => {
        state.rooms < 5 && dispatch({ type: 'INCREMENT' })
    }

    const getDecrement = () => {
        state.rooms > 1 && dispatch({ type: 'DECREMENT' })
    }

    return (
        <BookingContext.Provider value={{ booking, state, setBooking, getIncrement, getDecrement, addRoom, deleteRoom }}>
            {children}
        </BookingContext.Provider>
    )
}

const roomReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, rooms: state.rooms + 1 };
        case 'DECREMENT':
            return { ...state, rooms: state.rooms - 1 };
        case 'ADD_ROOM':
            return { ...state, roomTypes: { ...state.roomTypes, [action.payload]: state.roomTypes[action.payload] + 1 } }
        case 'ADD_NEW_ROOM':
            return { ...state, roomTypes: { ...state.roomTypes, [action.payload]: 1 } }
        case 'DELETE_ROOM':
            return { ...state, roomTypes: { ...state.roomTypes, [action.payload]: state.roomTypes[action.payload] - 1 } }
        case 'CURRENT_ROOMS':
            return { ...state, roomTypes: { ...state.roomTypes } }
        default:
            return state;
    }
}












const calcRoomsNo = (obj) => {
    let rooms = 0, key;
    for (key in obj) {
        rooms += obj[key]
    }
    return rooms;
}