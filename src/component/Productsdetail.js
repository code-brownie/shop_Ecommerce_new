import React, { useState } from 'react'
import '../style/productdetail.css'
import Upload from './Upload';
import { useDispatchCart, useCart } from './ContexReducer';
import { useLocation } from 'react-router-dom';
const Productsdetail = () => {
    const data = useCart();
    const [Qty, setQty] = useState(1)
    const handleChange = (event) => {
        const inputValue = event.target.value;
        if (inputValue >= 1) setQty(inputValue)
    }
    let dispatch = useDispatchCart();
    const location = useLocation();
    const imageURL = new URLSearchParams(location.search).get('image');
    const id = new URLSearchParams(location.search).get('id');
    const name = new URLSearchParams(location.search).get('name');
    const price = new URLSearchParams(location.search).get('price');
    const handleAddtoCart = async () => {
        const finalPrice = parseInt(price) * Qty;
        await dispatch({ type: 'ADD', id: id, name: name, price: finalPrice, img: imageURL, Qty: Qty });
        console.log(data);

    };
    return (
        <>
            <div className="small-container single-product">
                <div className="row">
                    <div className="col-2">
                        <img src={imageURL} width='100%' alt="gallery" />
                    </div>
                    <div className="col-2">
                        <h1>{name}</h1>
                        <h4>${parseInt(price) * Qty}</h4>
                        <input type='number' value={Qty} onChange={handleChange} />
                        <div className='btn' style={{ cursor: 'pointer' }} onClick={handleAddtoCart}>Add to Cart</div>
                        <h3>Product Details</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laborum ab commodi eaque neque reiciendis nemo laboriosam sequi voluptas dolorem?
                        </p>
                    </div>
                </div>
            </div >
            <Upload name={name} />
        </>
    )
}

export default Productsdetail
