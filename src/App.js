import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Congrats from './Congrats';
import GussedWord from './GussedWord';
function App() {
  const [count,setCount] = useState(0)
  return (
    <div className="App" data-test='component-app'>
      <h1 data-test='component-display'>Display Counter <span data-test="component-count">{count}</span></h1>
      <button data-test='component-button' onClick={()=>setCount(count+1)}>Increment</button>
      <Congrats success={true}/>
      <GussedWord gussedWords={[
         {gussedWord:'train',latterMatchCount:3},
         {gussedWord:'agile',latterMatchCount:1},
         {gussedWord:'party',latterMatchCount:5},
      ]} />
    </div>
  );
}

export default App;
