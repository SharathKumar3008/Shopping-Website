import { connect } from 'react-redux';
import {removeProductToCart} from '../action/cart';
import { useNavigate } from "react-router-dom";

const Cart = ({products, dispatch}) => {
    const navigate = useNavigate();
    const onProductRemove = (id) => {
        dispatch(removeProductToCart(id));
    }

    return (
        <>
            <div className="main-content cart">
                <h2 className="page-heading">Cart</h2>
                {
                    products.length ? 
                    <table>
                        <thead>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Sku</th>
                            <th>Quantity</th>
                            <th></th>
                        </thead>
                        <tbody>
                            {products.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td><img src={product.image} /></td>
                                        <td><h4 onClick={()=> navigate(`/product/${product.id}`)}>{product.name}</h4></td>
                                        <td><span>{product.sku}</span></td>
                                        <td><span>{product.quantity}</span></td>
                                        <td><span className="remove-button"><button onClick={()=> onProductRemove(product.id)}>x</button></span></td>
                                    </tr>
                                )
                            }) }
                        </tbody>
                    </table>
                    :
                    <p>Products not available. <a className="link" onClick={()=> navigate('/')}>Click here</a> </p>
                }
            </div>
        </>
    )
}


const mapStateToProps = (state)=>{
    return {
        products : state.cart
    }
};

export default connect(mapStateToProps)(Cart);