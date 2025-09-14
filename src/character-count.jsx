import React, { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");

  return (
    <div>
      <textarea  value={text} onChange={(e) => setText(e.target.value)} placeholder="Type here..."/>
      <p style={{ color: text.length > 50 ? "red" : "black" }}>
        {text.length} characters
      </p>
    </div>
  );
}

export default CharacterCounter;

