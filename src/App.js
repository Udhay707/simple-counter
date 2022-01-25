import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import { useState } from 'react';
import SumGet from './Components/SumGet';

function App() {

  const [sum, setSum] = useState(0);
  function total(value) {
    setSum(sum + Number(value));
  }

  return (
    <div className="App">
      <div className='gridview'>
        <Counter inc={1} func={total}/>
        <Counter inc={5} func={total} />
        <Counter inc="10" func={total} />
        <Counter inc="50" func={total} />
        <Counter inc="100" func={total} />
        <Counter inc="200" func={total} />       
      </div>
      <SumGet sum={sum} />
      <button className="app-btn" onClick={()=>setSum(0)}>Reset</button>
    </div>
  );
}

export default App;
