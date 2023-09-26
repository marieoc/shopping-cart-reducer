import React from 'react';



const ListItems = ({ state, dispatch }) => {

    const addItemToCart = (item) => {
        dispatch({ type: 'addItemToCart', payload: item });
    }



    return (
    <main className='w-full flex flex-center flex-wrap'>
        {
            state.items.length !== 0 &&
            state.items.map((item, index) => {
                return (
                    <div 
                        key={`${item.name}-${index}`} 
                        className='item_card flex flex-col flex-center'
                    >
                        <span>{item.name}</span>
                        <span>{item.price} euros</span>
                        <div className='add-btn__wrapper'>
                            <button 
                                className='add-btn'
                                onClick={() => addItemToCart(item)}
                            >
                                Ajouter
                            </button>
                        </div>
                    </div>
                )
            })
        }
        
    </main>
    )
}

export default ListItems;