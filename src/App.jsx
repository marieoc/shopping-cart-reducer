import React, { useReducer } from 'react'
import ListItems from './components/ListItems'
import Nav from './components/Nav'
import reducer, { initialState } from './reducer'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <div className='body'>
      <Nav state={state} dispatch={dispatch} />
      <ListItems state={state} dispatch={dispatch} />
    </div>
  )
}

export default App