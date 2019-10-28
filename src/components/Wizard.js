import React from "react";
	
let frameStyles = {
	margin: "0px",
	padding: "0px",
	display: "flex",
	flexDirection: "row",
	transform: "translateX(0%)",
	transition: "transform 0.4s linear"
};

const defaultStyles = {width: "60%"};

class Wizard extends React.Component {
	constructor(props) {
		super(props)
		
		const {children, defaultStep, style = defaultStyles} = this.props;
		
		this.state = {
			activeStep: defaultStep || 0,
		};
		
		this.childrenCount = React.Children.count(children);
		this.scrollElement = React.createRef(null);
		this.width = style.width || "100%";
	};
	
	setActiveStep = (activeStep) => {
		const lastChild = this.childrenCount - 1;
		const newActiveStep = activeStep === lastChild ? 0 : activeStep += 1;
		this.setState({activeStep: newActiveStep});
	};
	
	nextStep = () => {
		if(!this.scrollElement.current) return;
		
		const {activeStep} = this.state;
		const {current} = this.scrollElement;
		const translateValue = 100 * activeStep;
		
		this.setActiveStep(activeStep);
		
		current.style.transform = `translateX(-${translateValue}%)`;
	};
	
	setStyles = (childElement, baseStyles) => {
		const {props} = childElement;
		let {style = {}} = props;
		
		style = {...style, ...baseStyles};
		
		return React.cloneElement(childElement, {style, ...props});
	};
	
	wrapChildElement = (childElement) => {
		const {props} = childElement;
		return (
			<div style={props.style}>{childElement}</div>
		);
	};
 	
	render() {
		let childElements = null; 
		
		childElements = React.Children.map(this.props.children, (child) => 
			this.setStyles(child, {minWidth: this.width}));
			
		childElements = React.Children.map(childElements, this.wrapChildElement);
		
		console.log('child', childElements)
		
		return (
			<div style={{overflow: "hidden", width: this.width}}>
				<ul ref={this.scrollElement} style={frameStyles}>	
					{childElements}
				</ul>
				<button type="button" onClick={() => this.nextStep()}>
					Next Step
				</button>
			</div>
		);
	};
	
	componentDidMount() {
		this.props.defaultStep && this.nextStep();
	};
};

export default Wizard;
