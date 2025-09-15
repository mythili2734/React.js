import React, { useEffect } from "react";

const RenderLogger = () => {
	useEffect(() => {
		console.log("Rendered!");
	});
	return <div>Render Logger Component</div>;
};

export default RenderLogger;
