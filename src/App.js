import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0)
  return (
    <div className="App" data-test='component-app'>
      <h1 data-test='component-display'>Display Counter <span data-test="component-count">{count}</span></h1>
      <button data-test='component-button' onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  );
}

export default App;
