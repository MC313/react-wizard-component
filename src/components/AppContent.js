import React from "react";

import Wizard from "./Wizard";

const Content = () => (
	<>
		<Wizard style={{ width: "250px" }} initialStep={4}>
			{
				({ currentStep }) => {
					return (
						<>
							<Wizard.Item styles={{ background: "blue" }}>
								<p>This is Step {currentStep}</p>
							</Wizard.Item>
							<Wizard.Item styles={{ background: "red" }}>
								<p>This is Step {currentStep}</p>
							</Wizard.Item>
							<Wizard.Item title="Step 3" styles={{ background: "green" }}>
								<p>This Step {currentStep}</p>
							</Wizard.Item>
							<Wizard.Item title="Step IV" styles={{ background: "black" }}>
								This is step {currentStep}
							</Wizard.Item>
						</>
					)
				}
			}
		</Wizard>
	</>
);

export default Content;
