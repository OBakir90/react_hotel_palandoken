import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Services from './pages/Services'
import AvailableRooms from './pages/AvailableRooms'
import ReservationDetails from './pages/ReservationDetails'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/rooms' component={Rooms} />
                <Route path='/services' component={Services} />
                <Route path='/availablerooms' component={AvailableRooms} />
                <Route path='/reservation' component={ReservationDetails} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
