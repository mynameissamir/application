import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './products.css';
import { useNavigate } from "react-router-dom";
function Displayproduct() {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        axios
            .get('https://shoppingapiacme.herokuapp.com/shopping')
            .then((res) => {
                console.log(res);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <h1>Featured Products</h1>
            <h1><button onClick={() => navigate('/')}>logout</button></h1>
            <div className='item-container'>
                {products.slice(0, 3).map((product) => (
                    <div className='card' key={product.id}>
                        <img src={product.image} alt='' />
                        <h3>{product.brand}</h3>
                        <p>{product.price}</p>
                        <p>{product.color}</p>
                        <p>{product.item}</p>

                        <button onClick={() => setCount(count + parseInt(product.price.replace("$", "")))}>Add to cart</button>
                        <button onClick={() => setCount(count - parseInt(product.price.replace("$", "")))}>Remove from</button>

                    </div>
                ))}
            </div>

            <h1>total: {count}</h1>
        </div>
    );
};
export default Displayproduct;