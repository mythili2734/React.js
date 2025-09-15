import React, { useState, useEffect } from "react";

const DynamicPageTitle = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		document.title = `Count: ${count}`;
	}, [count]);

	return (
		<div>
			<h2>Counter: {count}</h2>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
};

export default DynamicPageTitle;
