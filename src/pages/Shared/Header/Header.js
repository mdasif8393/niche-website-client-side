import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user, logout} = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <h4>Fancy Bikes</h4>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
        </li>

        <li className="nav-item">
          <Link to="/addProduct" className="nav-link active" aria-current="page" >Add a product</Link>
        </li>

        <li className="nav-item">
          <Link to="/exploreBikes" className="nav-link active" aria-current="page" >Explore Bikes</Link>
        </li>

        <li className="nav-item">
          <Link to="/userOrders" className="nav-link active" aria-current="page" >My orders</Link>
        </li>

        <li className="nav-item">
          <Link to="/review" className="nav-link active" aria-current="page" >Review us</Link>
        </li>

        <li className="nav-item">
          <Link to="/manageAllOrders" className="nav-link active" aria-current="page" >Manage all orders</Link>
        </li>

        <li className="nav-item">
          <Link to="/addAdmin" className="nav-link active" aria-current="page" >Add admin</Link>
        </li>
        
      </ul>
      <form className="d-flex">
        {
          <p>{user.displayName}</p>
        }
        {
          user.email ? 
          <button onClick={logout} className="btn btn-outline-danger" >Logout</button> : 
          <Link to="/login"><button className="btn btn-outline-success" >Login</button></Link>
        }

        
      </form>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;