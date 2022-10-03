import React, { useState } from 'react';
import './Main.css';
import Button from './Button';
import Counter from './Counter';

function Main() {
  const [count, setCount] = useState(0);
  return (
   <div className='main_div'>
   <div className='center_div'>
   <Counter>{count}</Counter>
   <div style={{flexDirection:'row',display:'flex'}}>
   <Button onClick={() => setCount(count+1)}>Increment</Button>
   <Button onClick={() => setCount(count-1)}>Decrement</Button>
   </div>
   </div>
   </div>
  );
}

export default Main;
