import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {addProductToCart} from '../action/cart';
import { useNavigate } from "react-router-dom";

const ProductDetails = ({products, dispatch}) => {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const params = useParams();
    const product = products.find((product)=> product.id == params.id)
    
    const onAddToCart = (product) => {
        console.log("product", product);
        dispatch(addProductToCart({...product, quantity}));
        navigate('/cart');
    }

    return (
        <div className="main-content productView">
            <h2 className="page-heading">List</h2>
            <div className="productData">
                <div className="product-image">
                    <img src={product.image} />
                </div>
                <div className="product-details">
                    <h2>{product.name}</h2>
                    <span>SKU: {product.sku}</span>
                    <div className="quantity-box">
                        <span className="quantity-label">Quantity:</span>
                        <input type="number"
                            value={quantity}
                            onChange={(e)=> setQuantity(e.target.value)}
                        />
                    </div>
                    <button className="form--addToCart"
                        onClick={()=> onAddToCart(product)}
                    >Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    
    return {
        products : state.products
    }
};

export default connect(mapStateToProps)(ProductDetails);