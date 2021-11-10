import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import HomeProduct from '../HomeProduct/HomeProduct';

import './HomeProducts.css'

const HomeProducts = () => {
    const [allBikes, setAllBikes] = useState([]);
    const bikes = allBikes.slice(5);

    useEffect(() => {
        axios.get('http://localhost:5000/bikes')
        .then( result => {
            setAllBikes(result.data);
            
        } )
    },[])
    
    return (
        <div className="home-products-container mt-5">
            {
                    bikes.map(bike=> <HomeProduct key={bike._id} bike={bike}></HomeProduct>)
                }

        </div>
                
           
            
    );
};

export default HomeProducts;