import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceid}=useParams()
    return (
        <div>
            <h1>This is Booking:{serviceid}</h1>
        </div>
    );
};

export default Booking;