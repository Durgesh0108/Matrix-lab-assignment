import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";

const RootLayout = () => {
	return (
		<div className="flex overscroll-y-none">
			<Navbar />
			<main className="w-full container mx-5">
				<Search />
				<Outlet />
			</main>
		</div>
	);
};

export default RootLayout;

// export async function DataLoader({ request, params }) {
// 	// const query = request;
// 	// const search = params.q;
// 	const textData = SearchedData;
// 	console.log(`Data received: ${textData}`);
// 	// return data;
// }
