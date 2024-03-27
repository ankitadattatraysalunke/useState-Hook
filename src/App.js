

import './App.css';
import Header from './Components/header';
import React, {useState} from 'react';

function App() {
  const[num, setNum] = useState(2);


  function inc(n){
    setNum(num+ n);
  }

  function dec(n){
    setNum(num- n);
  }

  return (
 <div className="App">
    <Header />
    <div className='main'>
    <h1 className='heading'>{num}</h1>
    <div className="buttons">
    <button className='btn' onClick={() => inc(2)}>Increment</button>
    <button className='btn' onClick={() => dec(1)}>Decrement</button>
    </div>
  </div>
  
</div>
  );
}

export default App;
