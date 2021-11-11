import React from 'react';
import { Link } from 'react-router-dom';


const HomeProduct = ({bike}) => {
    const {_id, name, engine, price, description, image} =bike;
    return (
        <div className="container my-5">
            <div className="card" style={{width: "23rem" , height: "35rem"}}>
            <img style={{width: "100%", height: "280px"}} src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6>{engine} cc</h6>
                <p className="card-text"><small className="text-muted">{description}</small></p>
                <h6>{price} taka</h6>
                <Link to={`/purchaseProduct/${_id}`}><button className="btn btn-outline-success">Buy Now</button></Link>
            </div>
            </div>
        </div>
    );
};

export default HomeProduct;