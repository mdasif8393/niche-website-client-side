import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import AddProduct from './pages/Dashboard/AddProduct/AddProduct';
import ExploreBikes from './pages/Explore/ExploreBikes/ExploreBikes';
import PurchaseProduct from './pages/Purchase/PurchaseProduct/PurchaseProduct';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
const axios = require('axios').default;

function App() {
  return (
    <AuthProvider>
      <Router>

        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/addProduct">
            <AddProduct></AddProduct>
          </Route>

          <Route path="/exploreBikes">
            <ExploreBikes></ExploreBikes>
          </Route>

          <PrivateRoute path="/purchaseProduct/:id">
            <PurchaseProduct></PurchaseProduct>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>
          

        </Switch>

      </Router>
    </AuthProvider>
  );
}

export default App;
