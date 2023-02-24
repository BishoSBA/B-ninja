import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function App() {
	return (
		<div className="App">
			<div className=" items-center gap-8">
				<div className="flex flex-col rounded-b-3xl background-Image mb-36">
					<header className=" bg-black bg-opacity-10 h-34">
						<div className=" lg:m-auto flex items-center px-4 py-8 gap-4 lg:w-11/12 ">
							<img className="rounded-lg w-12" src="/icon.png" alt="" srcset="" />
							<h2 className="text-xl font-bold text-white"> B-Ninja</h2>
						</div>
					</header>
					<section className="flex flex-col lg:flex-row-reverse justify-center align-center lg:gap-8">
						<div className="flex flex-col gap-12 lg:basis-7/12 lg:justify-center lg:items-start">
							<div className="flex flex-col items-center md:flex-row justify-center gap-6">
								<img className="rounded-3xl w-28 mt-3" src="/icon.png" />
								<h1 className="text-3xl font-bold text-white"> B-Ninja</h1>
							</div>
							<div className="flex flex-col items-center gap-12 lg:items-start">
								<span className="text-2xl text-white">
									{" "}
									Grocery delivery for DOPEs with Beshir{" "}
								</span>
								<div className="flex flex-col gap-2 sm:flex-row">
									<img
										className="rounded-md w-64 mr-4"
										src="/playstore.png"
										alt="playstore"
									/>
									<img
										className="rounded-md w-64 mr-4"
										src="/appstore.png"
										alt="playstore"
									/>
								</div>
							</div>
						</div>
						<div className="rounded-md w-64 mx-auto mt-4 flex items-center justify-center black-iphone lg:basis-5/12 lg:w-56 lg:scale-150 lg:translate-x-5 lg:translate-y-44">
							<img
								className="rounded-3xl w-56 my-5"
								src="/iphone-frame.png"
								alt=""
								srcset=""
							/>
						</div>
					</section>
				</div>
				<section className="pb-12 pt-80 sm:pt-64 md:pt-48 lg:flex lg:justify-center">
					<ul className="flex flex-col px-8 gap-8 lg:flex-row lg:justify-between lg:w-5/6">
						<li className="flex text-xl gap-4 lg:gap-0 ">
							<div>
								<span className="fa-stack fa-1x ">
									<i className=" text-gray-200 fas fa-circle fa-stack-2x"></i>
									<i className=" text-blue-600 fas fa-store fa-stack-1x"></i>
								</span>
							</div>
							<div>
								<h3 className=" text-xl font-bold mb-1">Supermarket prices</h3>
								<p className=" text-lg text-gray-500">
									Over 2000 items, direct to your door, at normal supermarket
									prices!
								</p>
							</div>
						</li>
						<li className="flex text-xl gap-4 ">
							<div>
								<span className="fa-stack fa-1x ">
									<i className=" text-gray-200 fas fa-circle fa-stack-2x"></i>
									<i className=" text-blue-600 fas fa-clock fa-stack-1x"></i>
								</span>
							</div>
							<div>
								<h3 className=" text-xl  font-bold mb-1">Ultra-fast delivery</h3>
								<p className=" text-lg text-gray-500">
									Our riders bring your groceries, direct to your door, in
									minutes.
								</p>
							</div>
						</li>
						<li className="flex text-xl gap-4 ">
							<div>
								<span className="fa-stack fa-1x ">
									<i className=" text-gray-200 fas fa-circle fa-stack-2x"></i>
									<i className=" text-blue-600 fas fa-carrot fa-stack-1x"></i>
								</span>
							</div>
							<div>
								<h3 className=" text-xl font-bold mb-1">Fresh & Organic</h3>
								<p className=" text-lg text-gray-500">
									Choose from our large selection of fresh and organic items.
								</p>
							</div>
						</li>
					</ul>
				</section>
			</div>

			<footer>
				<p className="text-center pb-8 text-xl text-gray-500">
					© 2022 Ninja, All rights reserved
					<br />
					شركة تقنية التقدم لتقنية المعلومات
					<br />
					ADVANCED TECHNOLOGIES COMPANY FOR INFORMATION TECHNOLOGY
				</p>
			</footer>
		</div>
	);
}

export default App;
