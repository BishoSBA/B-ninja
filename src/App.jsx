import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div className=" flex flex-col items-center gap-14">
				<div className="flex flex-col bg-gray-600 pb-36 rounded-b-3xl">
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
				<section className="pb-12 -mt-12">
					<ul className="flex flex-col px-10 gap-8 lg:flex-row lg:gap-0 max-w-6xl">
						<li className="flex text-xl gap-6 lg:gap-0">
							<div>
								<span className="fa-stack fa-1x ">
									<i className=" text-gray-200 fas fa-circle fa-stack-2x"></i>
									<i className=" text-blue-600 fas fa-store fa-stack-1x"></i>
								</span>
							</div>
							<div>
								<h3 className=" text-2xl font-bold mb-3">Supermarket prices</h3>
								<p className=" text-2lg">
									Over 2000 items, direct to your door, at normal supermarket
									prices!
								</p>
							</div>
						</li>
						<li className="flex px-10 text-xl gap-6 ">
							<div>
								<span className="fa-stack fa-1x ">
									<i className=" text-gray-200 fas fa-circle fa-stack-2x"></i>
									<i className=" text-blue-600 fas fa-store fa-stack-1x"></i>
								</span>
							</div>
							<div>
								<h3 className=" text-2xl font-bold mb-3">Supermarket prices</h3>
								<p className=" text-2lg">
									Over 2000 items, direct to your door, at normal supermarket
									prices!
								</p>
							</div>
						</li>
						<li className="flex px-10 text-xl gap-6 ">
							<div>
								<span className="fa-stack fa-1x ">
									<i className=" text-gray-200 fas fa-circle fa-stack-2x"></i>
									<i className=" text-blue-600 fas fa-store fa-stack-1x"></i>
								</span>
							</div>
							<div>
								<h3 className=" text-2xl font-bold mb-3">Supermarket prices</h3>
								<p className=" text-2lg">
									Over 2000 items, direct to your door, at normal supermarket
									prices!
								</p>
							</div>
						</li>
					</ul>
				</section>
			</div>
		</div>
	);
}

export default App;
