import React, { useState } from 'react';

function ToggleLight() {
  const [islight, setlight] = useState(true);

  function click() {
    setlight(!islight)
  }

  return (
    <div style={{backgroundColor:islight? "black":"white", color:islight? "white":"black"}}>
      <h1>
        toggle
      </h1>
      <button onClick={click}>click</button>

    </div>  
  )
}


export default ToggleLight;
