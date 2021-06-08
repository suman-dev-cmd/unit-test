import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import Congrats from './Congrats';
import GussedWord from './GussedWord';
import Input from './Input';
import {getSecretWord} from './actions'
function App() {
  const [count,setCount] = useState(0)
  const success = false;
  const secrectWord = 'party';
  const gussedWords = [];
  useEffect(()=>{
    getSecretWord();
  },[])
  return (
    <div className="App" data-test='component-app'>
      <h1 data-test='component-display'>Display Counter <span data-test="component-count">{count}</span></h1>
      <button data-test='component-button' onClick={()=>setCount(count+1)}>Increment</button>
      <Congrats success={success}/>
      <Input success={success} secrectWord={secrectWord} />
      <GussedWord gussedWords={gussedWords} />
    </div>
  );
}

export default App;
