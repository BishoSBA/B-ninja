import React from "react";

const Header = () => {
	return (
		<header className=" bg-black bg-opacity-10 h-34">
			<div className=" lg:m-auto flex items-center px-4 py-8 gap-4 lg:w-11/12 ">
				<img className="rounded-lg w-12" src="/icon.png" alt="icon" />
				<h2 className="text-xl font-bold text-white"> B-Ninja</h2>
			</div>
		</header>
	);
};

export default Header;
