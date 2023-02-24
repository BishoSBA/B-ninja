import React from "react";

const Main = () => {
	return (
		<div className="flex flex-col gap-12 lg:basis-7/12 lg:justify-center lg:items-start">
			<div className="flex flex-col items-center md:flex-row justify-center gap-6">
				<img className="rounded-3xl w-28 mt-3" src="/icon.png" />
				<h1 className="text-3xl font-bold text-white"> B-Ninja</h1>
			</div>
			<div className="flex flex-col items-center gap-12 lg:items-start">
				<span className="text-2xl text-white text-center">
					{" "}
					Grocery delivery for DOPEs{" "}
				</span>
				<div className="flex flex-col gap-2 sm:flex-row">
					<img className="rounded-md w-64 mr-4" src="/playstore.png" alt="playstore" />
					<img className="rounded-md w-64 mr-4" src="/appstore.png" alt="playstore" />
				</div>
			</div>
		</div>
	);
};

export default Main;
