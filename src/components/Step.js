import React from "react";

const containerStyles = {
	display: "flex",
	flexDirection: "column",
	height: "400px"
};

const childStyles = {
	color: "white",
	height: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	margin: "0px"
};

const Step = ({children, color, order, styles, title}) => {
	console.log(children.props)

	return (
		<li style={{...containerStyles, ...styles, backgroundColor: color || "black"}}>
			<p style={{fontWeight: "bold", color: "white"}}>
				{title}
			</p>
			<div style={childStyles}>
				{children}
			</div>
		</li>
	);
};

export default Step;
