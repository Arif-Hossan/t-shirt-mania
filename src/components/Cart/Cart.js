import React from 'react';

const Cart = ({cart,handleRemoveCart}) => {
    let message;
    if(cart.length ===0){
        message = <p>Please, Buy atleast one item</p>
    }
    else if(cart.length ===1){
        message=<div><h3>Amar joono akta naw</h3>
        <p>Tor jonno arekta nis</p></div>
    }
    else {
        message = <p>Thanks for buying</p>
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Quantity : {cart.length}</p>
            {
                cart.map(tshirt => <p key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={()=>handleRemoveCart(tshirt)}>*</button></p>)
            }
            {
                message
            }
            {
                cart.length === 3 ? <p>Tinta kinteso ?</p> :<p>Kin, aro beshi kin</p>
            }
        </div>
    );
};

export default Cart;

/*
conditional rendering
1.use element and if else
2.turnary operator true false
*/