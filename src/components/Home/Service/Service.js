import React from 'react';
import { Link } from 'react-router-dom';
import "./service.css"
const Service = ({service}) => {
    const {img,description,id,name,price}=service;
    return (
        <div  className="pb-3 service">
         
            <img src={img} alt="" />
            <h5>Price:{price}</h5>
            <p className="px-5">{description}</p>
            <Link to={`/booking/${id}`}>
            <button className="btn btn-warning">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;