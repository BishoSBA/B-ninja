import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<header className="flex p-6 bg-gray-800 h-34">
				<img className="rounded-md w-12 h-12 mr-4" src="/icon.png" alt="" srcset="" />
				<h2 className="text-3xl font-bold text-white"> Ana Ninja</h2>
			</header>

			{/* <main>
				<div>
					<span> n-logo </span>
					<h1>Ana Ninja</h1>
				</div>
				<div>
					<span> Grocery delivery for DOPEs </span>
				</div>
				<div>
					<span> Google Play </span>
					<span> App Store </span>
				</div>
			</main> */}
		</div>
	);
}

export default App;
