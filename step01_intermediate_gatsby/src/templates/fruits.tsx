import React from "react";

export default function Fruits({ pageContext }) {

	console.log("Fruits: ", pageContext);

	return (
		<>
			<h1>{pageContext.name}</h1>
			<p>{pageContext.desc}</p>
		</>
	);
}