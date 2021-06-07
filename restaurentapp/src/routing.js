import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import Header from './header';
import Footer from './footer';
import Home from './component/homePage/home';
import ListingArea from './component/listingarea/listingArea';
import Details from './component/details/restDetails';
import PlacingOrder from './component/booking/placeorder';
import Booking from './component/viewBooking/viewbooking';

const routing = () =>{
    return(
        <>
            <BrowserRouter>
                <Header />
                <Route exact path ="/" component={Home} />
                <Route path ="/listing/:id" component={ListingArea} />
                <Route path="/details/:id" component={Details}/>
                <Route path="/booking/:name" component={PlacingOrder} />
                <Route path="/viewbooking" component={Booking} />
                <Footer />
            </BrowserRouter>
        </>
    )
}
export default routing;