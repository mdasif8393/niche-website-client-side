import { Button } from '@mui/material';
import React from 'react';
import Header from '../../Shared/Header/Header';
import HomeProducts from '../HomeProducts/HomeProducts';
import ShowReviews from '../Review/ShowReviews/ShowReviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="container">
            <HomeProducts></HomeProducts>
            <ShowReviews></ShowReviews>
            </div>
        </div>
    );
};

export default Home;