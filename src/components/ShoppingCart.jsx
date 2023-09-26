import React from 'react';

const ShoppingCart = ({ state, dispatch }) => {

  return (
    <button
        className='shoppint_cart_btn'
        onClick={() => {
          dispatch({ type: 'toggleModal' })
        }}
    >
    </button>
  )
}

export default ShoppingCart