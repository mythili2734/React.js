import React, { useState } from "react";

const TrackInput = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    console.log(`Text changed: ${value.length} characters`);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />
    </div>
  );
};

export default TrackInput;