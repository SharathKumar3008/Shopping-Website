import { useNavigate } from "react-router-dom";

const ProductItem = ({product}) => {
    const navigate = useNavigate();
    return (
        <div className="product-item" onClick={()=> navigate(`/product/${product.id}`)}>
            <img src={`${product.image}`} />
            <span>{product.name}</span>
        </div>
    )
}

export default ProductItem;