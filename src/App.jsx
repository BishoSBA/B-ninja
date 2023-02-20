import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div className="bg-gray-600 flex flex-col items-center gap-6">
				<header className="flex p-6 bg-gray-800 h-34 w-screen">
					<img className="rounded-md w-12 h-12 mr-6" src="/icon.png" alt="" srcset="" />
					<h2 className="text-3xl font-bold text-white"> Ana Ninja</h2>
				</header>
				<div className="flex flex-col items-center ">
					<img className="rounded-2xl w-24 h-24 m-12" src="/icon.png" />
					<h1 className="text-3xl font-bold text-white"> Ana Ninja</h1>
				</div>
				<div className="flex flex-col items-center gap-6">
					<span className="text-2xl font-bold text-white">
						{" "}
						Grocery delivery for DOPEs{" "}
					</span>
					<div className="flex gap-2">
						<img
							className="rounded-md w-48 mr-4"
							src="/playstore.png"
							alt="playstore"
						/>
						<img className="rounded-md w-48 mr-4" src="/appstore.png" alt="playstore" />
					</div>
				</div>

				<img
					className="rounded-md mr-4 max-w-xs"
					src="/black-iphone.png"
					alt=""
					srcset=""
				/>
			</div>

			{/* <main>
				
				
			</main> */}
		</div>
	);
}

export default App;
