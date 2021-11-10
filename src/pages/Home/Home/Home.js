import { Button } from '@mui/material';
import React from 'react';
import Header from '../../Shared/Header/Header';
import HomeProducts from '../HomeProducts/HomeProducts';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="container">
            <HomeProducts></HomeProducts>
            </div>
        </div>
    );
};

export default Home;