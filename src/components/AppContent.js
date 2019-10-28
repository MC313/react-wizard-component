import React from "react";

import Step from "./Step";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Wizard from "./Wizard";

const Content = () => (
	<>
		<Wizard style={{width: "250px"}}>
			<Step1 />
			<Step2 />
			<Step3 />
			<Step title="Step IV">This is step 4</Step>
		</Wizard>
	</>
);

export default Content;
