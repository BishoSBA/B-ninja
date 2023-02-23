import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function App() {
	return (
		<div className="App">
			<div className=" items-center gap-8">
				<div className="flex flex-col h-screen rounded-b-3xl gap-12 background-Image">
					<header className="flex items-center px-6 py-8 gap-4 bg-white bg-opacity-10 h-34">
						<img className="rounded-lg w-12" src="/icon.png" alt="" srcset="" />
						<h2 className="text-xl font-bold text-white"> Ana Ninja</h2>
					</header>

					<div className="flex flex-col items-center md:flex-row justify-center gap-6">
						<img className="rounded-3xl w-28 mt-3" src="/icon.png" />
						<h1 className="text-3xl font-bold text-white"> Ana Ninja</h1>
					</div>
					<div className="flex flex-col items-center gap-12">
						<span className="text-2xl font-bold text-white">
							{" "}
							Grocery delivery for DOPEs{" "}
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
				<div className="rounded-md w-64 m-auto flex items-center justify-center black-iphone -mt-16 sm:-mt-32">
					<img className="rounded-3xl w-56" src="/PhoneScreen.png" alt="" srcset="" />
				</div>
				<section className="pb-12 lg:pt-12">
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
						<li className="flex text-xl gap-6 ">
							<div>
								<span className="fa-stack fa-1x ">
									<i className=" text-gray-200 fas fa-circle fa-stack-2x"></i>
									<i className=" text-blue-600 fas fa-store fa-stack-1x"></i>
								</span>
							</div>
							<div>
								<h3 className=" text-2xl font-bold mb-3">Ultra-fast delivery</h3>
								<p className=" text-2lg">
									Our riders bring your groceries, direct to your door, in
									minutes.
								</p>
							</div>
						</li>
						<li className="flex text-xl gap-6 ">
							<div>
								<span className="fa-stack fa-1x ">
									<i className=" text-gray-200 fas fa-circle fa-stack-2x"></i>
									<i className=" text-blue-600 fas fa-store fa-stack-1x"></i>
								</span>
							</div>
							<div>
								<h3 className=" text-2xl font-bold mb-3">Fresh & Organic</h3>
								<p className=" text-2lg">
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
