import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons'

const ShowReview = ({r}) => {
    const {_id, review, rating, userName} = r;
    const [value, setValue] = useState(rating);
    
    return (
        <div>
            <div className="card border-secondary mb-3 text-center" style={{height:'220px' , width:'280px'}}>
            
            <div className="card-body ">
                <FontAwesomeIcon icon={faUser} size="2x" />
                <h5 className="card-title">{userName}</h5>
                
                <p className="card-text text-secondary">{review}</p>
                <Rating name="read-only" value={value} readOnly />
            </div>
            </div>
        </div>
    );
};

export default ShowReview;