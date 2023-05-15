import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';
import Cart from '../Cart/Cart';

const Home = () => {
    const tshirts= useLoaderData();
    const [cart,setCart]= useState([]);
    const handleAddToCart = tshirt =>{
        const exist = cart.find(ts => ts._id === tshirt._id);
        if(exist){
            alert ("Already Added");
        }else{
            const newCart = [...cart,tshirt];
            setCart(newCart);
        }
    }
    const handleRemoveCart = tshirt => {
        const remaining = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaining);
    }
    return (
        <div className='home-container'>
            <div className="t-shirt-container">
            {
                tshirts.map(tshirt=> <Tshirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}></Tshirt>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
            </div>
        </div>
    );
};

export default Home;