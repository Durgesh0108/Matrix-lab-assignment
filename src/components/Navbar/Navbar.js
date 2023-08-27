import React from "react";
import { NavLink } from "react-router-dom";
import { MdToken } from "react-icons/md";

const Navbar = () => {
	// const bgColor = "bg-pink-600"
	return (
		<>
			<div className="min-w-max">
				<div className="h-full px-3 py-4 overflow-y-auto rounded-tr-3xl bg-gray-700 dark:bg-gray-800">
					<ul className="space-y-2 font-medium">
						<li>
							<NavLink
								to="/tokenaddress"
								className={`flex items-center p-2 text-white rounded-lg hover:bg-pink-600`}
							>
								<MdToken />
								<span className="ml-3">Token Address</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/pairaddress"
								className={`flex items-center p-2 text-white rounded-lg hover:bg-pink-600`}
							>
								<span className="ml-3">Pair Address</span>
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;
