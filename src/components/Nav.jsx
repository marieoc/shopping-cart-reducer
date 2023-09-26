import React from 'react'
import ShoppingCart from './shoppingCart'
import Total from './Total'

const Nav = ({ state, dispatch }) => {

  return (
    <header className='w-full flex space-between'>
        <nav className='flex flex-center'>
            <ul className='w-full flex'>
                <li><a href="">Accueil</a></li>
                <li><a href="">Boutique</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>

        <div className='shopping_cart__wrapper flex flex-center'>
            <ShoppingCart state={state} dispatch={dispatch} />
            <span className='number'>{state.cart.length}</span>
        </div>

        <div className={`modal ${state.isModalOpen === true ? 'active' : '' }`}>
          <Total state={state} dispatch={dispatch} />
        </div>
    </header>
  )
}

export default Nav