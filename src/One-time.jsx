import React, { useEffect } from "react";

const OneTimeWelcome = () => {
	useEffect(() => {
		alert("Welcome to the app!");
	}, []);
	return <div>Welcome Component Loaded</div>;
};

export default OneTimeWelcome;
