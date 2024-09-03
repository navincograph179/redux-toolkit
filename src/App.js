import React from 'react'
import './App.css';
import { decrement, increment } from './redux/counterSlice';
import { useSelector } from 'react-redux';
const App = () => {
  const count = useSelector((state) => state.counter.value)
  return (
    <div className='App'>
      <h1>Count : {count}</h1>
    </div>
  )
}

export default App