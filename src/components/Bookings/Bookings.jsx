import { useEffect } from "react";
import { useState } from "react";
import Booking from "../Booking/Booking";
import AOS from "aos";
import 'aos/dist/aos.css';
AOS.init({
    duration:1000,
    offset:200,
})

const Bookings = () => {

    const [bookings,setBookings] = useState([]);
  

    useEffect(()=>{
        fetch('/bookings.json')
        .then(res => res.json())
        .then(data =>{
            setBookings(data)
        } )},[])

    return (
        <div className="mt-10">
        <h1 className="text-3xl font-bold text-center underline decoration-blue-600 mb-12">
          Hotel <span className="text-blue-800">Booking</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
             {
                bookings.map((booking) => <Booking key={booking.id} booking={booking}></Booking>)
             }
              </div>
      </div>
    );
};

export default Bookings;
