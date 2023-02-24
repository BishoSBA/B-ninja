import React from "react";

const ListItem = ({ icon, title, desc }) => {
	return (
		<li className="flex text-xl gap-4 ">
			<div>
				<span className="fa-stack fa-1x ">
					<i className=" text-gray-200 fas fa-circle fa-stack-2x"></i>
					<i className={" text-blue-600 fas fa-stack-1x " + icon}></i>
				</span>
			</div>
			<div>
				<h3 className=" text-xl font-bold mb-1">{title}</h3>
				<p className=" text-lg text-gray-500">{desc}</p>
			</div>
		</li>
	);
};

export default ListItem;
