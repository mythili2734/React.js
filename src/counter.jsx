import React, {useState} from 'react'

function Count() {
    const [Count, setcount]=useState(0)
    function inc(){
        setcount(Count+1);
    }
    function dec(){
        setcount(Count-1);
    }
    function res(){
        setcount(0)
    }

  return (
    <div>
        <h3>Count:{Count}</h3>
        <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={res}>Reset</button>
  

    </div>
  )
}

export default Count;
