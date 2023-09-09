import { useState } from 'react'
import './App.css'
import Counter from './Counter';
import Users from './Users';
import Comments from './Comments';

function App() {
  
  function handleClick(){
    alert('btn clicked');
  }

  return (
    <>
      <h3>React Core Concepts part-2</h3>
      <button onClick={handleClick}>Click me</button>
      <Counter></Counter>
      <Users></Users>
      <Comments></Comments>
    </>
  )
}

export default App
