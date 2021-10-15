import React from 'react';

const Expert = ({expert}) => {
    const {name,img,expertize}=expert;
    return (
        <div  className="col-xxl-3 col-lg-4 col-md-6 col-sm-12 g-4">
            <h1>Name: {name}</h1>
            <img className="img-fluid" src={img} alt="" />
            <h3 className="text-danger"> -{expertize}-</h3>
        </div>
    );
};

export default Expert;