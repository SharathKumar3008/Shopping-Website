const cartDefaultState = [];

const cartReducer = (state=cartDefaultState, action) => {
    switch(action.type) {
        case 'ADD_CART_ITEM': 
            if(state.find((product)=> product.id == action.product.id)) {
                return state.map((product)=>{
                    if(product.id === action.product.id){
                        console.log("product.quantity+action.product.quantity", parseInt(product.quantity)+parseInt(action.product.quantity));
                        return {
                            ...product,
                            quantity: parseInt(product.quantity)+parseInt(action.product.quantity)
                        }
                    }else{
                        return product;
                    }
                });
            } else {
                return [...state, action.product];
            }
        case 'REMOVE_CART_ITEM':
            return state.filter(({id}) => id !== action.id);
        default:
            return state;
    }
}

export default cartReducer;