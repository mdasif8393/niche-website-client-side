import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import ExploreBike from '../ExploreBike/ExploreBike'

const ExploreBikes = () => {
    const [bikes, setBikes] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:5000/bikes')
        .then( result => {
            setBikes(result.data);
            
        } )
    },[])
    return (
        <div>
            <div className="container">
                <div className="home-products-container mt-5">
                {
                    bikes.map((bike)=> <ExploreBike key={bike._id} bike={bike}></ExploreBike>)
                }
                </div>
            </div>
        </div>
        
        
    );
};

export default ExploreBikes;