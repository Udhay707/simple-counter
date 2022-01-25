import React, { useState } from 'react';


const Counter = (props) => {

    const[count, setcount]=useState(0);


  return (
    <span className='button-count'>
        <button onClick={()=>{props.func(props.inc)}}>+{props.inc}</button>
    </span>

  );
};

export default Counter;
