
export const cartItemsReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return [
                ...state,
                {...action.payload}
            ];
        case 'REMOVE_FROM_CART':
            const filteredProducts = state.filter(item => item.id !== action.payload.id);
            return filteredProducts;
        default: 
            return state;
    }
}

