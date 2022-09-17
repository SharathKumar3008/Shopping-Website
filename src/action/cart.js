export const addProductToCart = (product) => {
    return ({
        type: 'ADD_CART_ITEM',
        product
    });
}

export const removeProductToCart = (id) => {
    console.log("id", id);
    return ({
        type: 'REMOVE_CART_ITEM',
        id
    });
}