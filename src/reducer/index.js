// Items for shopping cart
const items = [
    {name: 'Livre', price: '12', availableQty: '3', qtyToBuy: '1'},
    {name: 'Crayon', price: '2', availableQty: '7', qtyToBuy: '1'},
    {name: 'Cahier', price: '4', availableQty: '21', qtyToBuy: '1'},
    {name: 'Sac', price: '16', availableQty: '9', qtyToBuy: '1'},
]


// initial state
export const initialState = {
    isModalOpen: false,
    items,
    cart: []
}

// reducer
const reducer = (state, action) => {
    switch (action.type) {
        case 'toggleModal':
            console.log(state.isModalOpen)
            return {
                ...state, 
                isModalOpen: !state.isModalOpen
            }

        case 'resetCart':
            return initialState;

        case 'increment':
            // check if qty is available
            if (parseInt(action.payload.qtyToBuy) < parseInt(action.payload.availableQty)) {
                const updatedCartWithQty = state.cart.map((item) => {
                    if (item.name === action.payload.name) {
                        return {
                            ...item,
                            qtyToBuy: parseInt(item.qtyToBuy) + 1
                        }
                    }
                    return item;
                }) 

                return {
                    ...state,
                    cart: updatedCartWithQty
                }
            } else {
                return {
                    ...state,
                    cart: state.cart
                }
            }

        case 'decrement':
            if (parseInt(action.payload.qtyToBuy) === 1 ) {
                return {
                    ...state,
                    cart: state.cart.filter((item) => item.name !== action.payload.name)
                }    
            }

            const updatedCartWithQty = state.cart.map((item) => {
                if (item.name === action.payload.name) {
                    return {
                        ...item,
                        qtyToBuy: parseInt(item.qtyToBuy) - 1
                    }
                }
                return item;
            }) 
            return {
                ...state,
                cart: updatedCartWithQty
            }

        case 'addItemToCart':
            const alreadyInCart = state.cart.find(el => el.name === action.payload.name);
            if (alreadyInCart) {
                const updatedCartWithQty = state.cart.map((item) => {
                    if ((item.name === action.payload.name) && (item.qtyToBuy < item.availableQty)) {
                        return {
                            ...item,
                            qtyToBuy: parseInt(item.qtyToBuy) + 1
                        }
                    }
                    return item;
                })

                return {
                    ...state,
                    cart: updatedCartWithQty
                }
                
            } else {
                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        {
                            ...action.payload
                        }
                    ]
                }
            }

        default:
            return state;
    }
}

export default reducer;