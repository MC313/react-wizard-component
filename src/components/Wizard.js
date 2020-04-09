import React, { useEffect, useRef, useState } from "react";

const log = (data, message = "[LOG]: ", type = "log") => {
	console[type](message, data);
	return data;
};

let frameStyles = {
	margin: "0px",
	padding: "0px",
	display: "flex",
	flexDirection: "row",
	transform: "translateX(0%)",
	transition: "transform 0.4s linear"
};

const wizardItemContainerStyles = {
	minWidth: "100%",
	height: "400px",
	display: "flex",
	flexDirection: "column",
};

const childStyles = {
	color: "white",
	height: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	margin: "0px"
};


const WizardContext = React.createContext({ initialStep: 0, currentStep: 0 });


const Wizard = ({ children, initialStep = 0, styles }) => {
	const [state, updateState] = useState({ currentStep: initialStep, initialStep, styles });

	let childrenFn = children({ currentStep: state.currentStep, nextStep: null });

	const numbOfChildren = React.Children.count(childrenFn.props.children);

	const scrollContainer = useRef(null);

	const updateCurrentStep = () => {
		updateState({ currentStep: state.currentStep === (numbOfChildren - 1) ? 0 : state.currentStep += 1 });
	};

	const nextStep = () => {
		scrollContainer.current && updateCurrentStep();
	};

	//childrenFn = children({ currentStep: state.currentStep, nextStep: () => console.log("Hello World") });

	// useEffect(() => {
	// 	if (!scrollContainer.current) return;
	// 	const translateValue = 100 * state.currentStep;
	// 	scrollContainer.current.style.transform = `translateX(-${translateValue}%)`;
	// }, [state.currentStep]);


	return (
		<WizardContext.Provider value={state}>
			<div style={{ overflow: "hidden", width: "auto" }}>
				<ul ref={scrollContainer} style={frameStyles}>
					{childrenFn}
				</ul>
			</div>
		</WizardContext.Provider>
	);
};

Wizard.Item = ({ children, styles, title }) => {
	return (
		<li style={{ ...wizardItemContainerStyles, ...styles }}>
			{
				title &&
				<p style={{ fontWeight: "bold", color: "white" }}>
					{title}
				</p>
			}
			<div style={childStyles}>
				{children}
			</div>
		</li>
	)
};

export default Wizard;
