import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Form } from "react-router-dom";

const Search = () => {
	return (
		<div className="flex justify-between my-4 mb-8">
			<Form method="post" className="w-6/12">
				<label
					for="default-search"
					className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
				>
					Search
				</label>
				<div className="relative">
					<input
						type="search"
						id="default-search"
						name="search"
						className="block w-full px-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search"
						required
					/>
					<button
						type="submit"
						className="text-black absolute right-2.5 bottom-1 font-medium rounded-lg text-sm px-4 py-2 "
					>
						<AiOutlineSearch />
					</button>
				</div>
			</Form>

			{/* <div> */}
			<button className="rounded-md px-5 py-1 text-white bg-gradient-to-r from-pink-700 to-purple-500">
				Connect
			</button>
			{/* </div> */}
		</div>
	);
};

export default Search;

// export async function data({ request, params }) {
// 	const data = await request.formData();
// 	const searchedText = data.get("search");

// 	console.log(searchedText)
// 	const url = request.url;
// 	let fetchUrl = "https://api.dexscreener.com/latest/dex";

// 	if (url.includes("pairaddress")) {
// 		fetchUrl = `${fetchUrl}/search?q=${searchedText}`;
// 	} else if (url.includes("tokenaddress")) {
// 		fetchUrl = `${fetchUrl}/tokens/${searchedText}`;
// 	}

// 	const response = await fetch(fetchUrl, {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(searchedText),
// 	});
// 	console.log(response);
// 	return fetchUrl
// }
