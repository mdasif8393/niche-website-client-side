import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ShowReview from '../../ShowReview/ShowReview';
import './ShowReviews.css'
const ShowReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:5000/review')
        .then(result => {
            setReviews(result.data);
        })
    },[])
    return (
        <div>
            <h5 className="text-center">Reviews</h5>
            <div className="container show-reviews-container">
            {
                reviews.map((r) =><ShowReview key={r._id} r={r}></ShowReview>)
            }
            </div>
        </div>
    );
};

export default ShowReviews;