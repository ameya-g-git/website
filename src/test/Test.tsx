import { useState } from "react";
import test0 from "./test.html";
import test1 from "./test_loggedin.html";
import test2 from "./test_loggedin_semesterselected.html";

export default function Test() {
	const [testNumber, setTestNumber] = useState(0);

	return (
		<div>
			<div
				style={{
					paddingTop: "4rem",
					backgroundColor: "black",
					width: "640px",
					height: "fit-content",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					gap: "1rem",
				}}
			>
				<button
					className="bg-yellow"
					type="button"
					onClick={(e) => {
						e.preventDefault();
						setTestNumber(0);
					}}
				>
					MacCal Test (not logged in)
				</button>
				<button
					className="bg-yellow"
					type="button"
					onClick={(e) => {
						e.preventDefault();
						setTestNumber(1);
					}}
				>
					MacCal Test (logged in, semester unselected, error occurs)
				</button>
				<button
					className="bg-yellow"
					type="button"
					onClick={(e) => {
						e.preventDefault();
						setTestNumber(2);
					}}
				>
					MacCal Test (logged in, success)
				</button>
			</div>
			{testNumber === 0 && <div dangerouslySetInnerHTML={{ __html: test0 }}></div>}
			{testNumber === 1 && <div dangerouslySetInnerHTML={{ __html: test1 }}></div>}
			{testNumber === 2 && <div dangerouslySetInnerHTML={{ __html: test2 }}></div>}
		</div>
	);
}
