import React from 'react';
import { Link } from 'react-router-dom';
import './Bannsr.css'
const Banner = () => {
    return (
        <div style={{marginLeft:'50px'}} id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item active">
        <div className="banner-container d-flex justify-content-center align-items-center">
            <div >
                <img src="https://i.ibb.co/R3cpLHJ/Honda-Fireblade-SP.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div style={{marginLeft:'30px'}}>
                <h1 className="mb-4" style={{fontSize:'70px', color:'#1C3E40',fontWeight: '700'}}>Honda Fireblade SP</h1>
                <h2 style={{color:'#1C3E40',fontWeight: '700'}}>ABS Break</h2>
                <h2 style={{color:'#1C3E40',fontWeight: '700'}}>1200 CC</h2>
                <h2 style={{color:'#1C3E40',fontWeight: '700'}}>215bhp</h2>
                <h2 style={{color:'#1C3E40',fontWeight: '700'}}>345 km/h</h2>

                <Link to="exploreBikes"><button className="btn btn-outline-success mt-3" >Explore all Bikes</button></Link>
            </div>
        </div>
        </div>
    
    
  </div>
</div>
    );
};

export default Banner;