import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img style={{ width:'100%', height:'90vh'}} src="https://i.ibb.co/9n4brsp/404.png" alt="" /> <br />
            <Link to="/" ><button>Go Back</button></Link>
        </div>
    );
};

export default NotFound;