import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TokenAddress, { tokenAddressLoader } from "./pages/TokenAddress";
import PairAddress, { pairAddressLoader } from "./pages/PairAddress";
import RootLayout from "./pages/Root";
// import { DataLoader } from "./components/Search/Search";
// import axios from "axios";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,

		children: [
			{
				path: "/tokenaddress",
				children: [
					{
						index: true,
						element: <TokenAddress />,
						loader: tokenAddressLoader,
					},
					{
						path: ":id",
						element: <TokenAddress />,
						loader: tokenAddressLoader,
					},
				],
			},
			{
				path: "/pairaddress",
				children: [
					{
						index: true,
						element: <PairAddress />,
						loader:pairAddressLoader,
					},
					{
						path: "?q",
						element: <PairAddress />,
						loader: pairAddressLoader,
					},
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
