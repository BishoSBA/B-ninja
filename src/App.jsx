import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div className=" flex flex-col items-center gap-14">
				<div className="bg-gray-600 pb-36 rounded-b-3xl">
					<header className="flex items-center px-6 py-8 bg-gray-800 h-34 w-screen">
						<img className="rounded-lg w-12 mr-4" src="/icon.png" alt="" srcset="" />
						<h2 className="text-xl font-bold text-white"> Ana Ninja</h2>
					</header>
					<div className="flex flex-col items-center ">
						<img className="rounded-3xl w-28 mt-3 mb-4" src="/icon.png" />
						<h1 className="text-3xl font-bold text-white"> Ana Ninja</h1>
					</div>
					<div className="flex flex-col items-center gap-12">
						<span className="text-2xl font-bold text-white">
							{" "}
							Grocery delivery for DOPEs{" "}
						</span>
						<div className="flex gap-2">
							<img
								className="rounded-md w-56 mr-4"
								src="/playstore.png"
								alt="playstore"
							/>
							<img
								className="rounded-md w-56 mr-4"
								src="/appstore.png"
								alt="playstore"
							/>
						</div>
					</div>
				</div>
				<div className="rounded-md w-64 black-iphone flex justify-center items-center">
					<img className="rounded-3xl w-56" src="/PhoneScreen.png" alt="" srcset="" />
				</div>
			</div>
		</div>
	);
}

export default App;
