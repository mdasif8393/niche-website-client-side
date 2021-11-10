import React from 'react';
import { useParams } from 'react-router-dom';
import './PurchaseProduct.css'

const PurchaseProduct = () => {
    const {id} = useParams()
    return (
        
        <div className="purchase-product-container">
            <h1>{id}</h1>
        </div>
    );
};

export default PurchaseProduct;