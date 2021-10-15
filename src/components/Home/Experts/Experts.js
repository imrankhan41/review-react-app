import React, { useEffect } from 'react';
import { useState } from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts,setExperts]=useState([]);
    useEffect(()=>{
        fetch("experts.json")
        .then(res=>res.json())
        .then(data =>setExperts(data))
    },[])
    return (
        <div id="experts" className="container">
            <h1 className="text-primary">Our Experts</h1>
           <div className="row">
           {
                experts.map(expert => <Expert
              
                expert={expert}></Expert>)
            }
           </div>
        </div>
    );
};

export default Experts;