import React from 'react'

const Total = ({ state, dispatch }) => {
  let array = [...state.cart];
  let newArray = [];

  for (let item of array) {
    newArray.push(parseInt(item.price * item.qtyToBuy));
  }

  const total = newArray.reduce((acc, currentValue) => acc + currentValue, 0);


  return (
    <div className='w-full flex flex-col flex-center total'>
        <p>Liste d'items dans le panier :</p>
        <button
          className='reset-cart'
          onClick={() => dispatch({ type: 'resetCart' })}
        >
          Vider le panier
        </button>

        
            
          
        
        <div className='w-full flex flex-col flex-center cart-list'>
          <table className='w-full'>
            <thead>
              <tr>
                <td>Produit</td>
                <td>Quantité</td>
                <td>Prix</td>
              </tr>
            </thead>
            <tbody>
              {
                state.cart.length !== 0 ?
                (state.cart.map((el, index) => {
                  return (
                    <tr className='cart-item w-full' key={`${el.name}-${index}`}>
                      <td>
                          <div>
                            <img src="" alt="" />
                          </div>
                          <span>{el.name}</span>
                      </td>

                      <td className='flex flex-center'>
                        <button 
                          className='qty-btn'
                          onClick={() => {
                            dispatch({ type: 'decrement', payload: el })
                          }}
                        >-</button>

                          <div>{el.qtyToBuy}</div>
                        <button 
                          className='qty-btn'
                          onClick={() => {
                            dispatch({ type: 'increment', payload: el })
                          }}
                        >+</button>
                      </td>

                      <td>
                        <p>{el.price * el.qtyToBuy} euros</p>
                      </td>
                    </tr>
                  )
                })) : (
                  <p>Il n'y a pas d'items dans le panier</p>
                )
              }
            </tbody>
          </table>
        </div>

        <div className='w-full total-price'>
          <p>Total : </p>
          <p>{total} euros</p>
        </div>
    </div>
  )
}

export default Total