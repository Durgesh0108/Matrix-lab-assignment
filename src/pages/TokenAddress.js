import React from "react";
import { useParams, useLoaderData } from "react-router-dom";
import BasicInfo from "../components/Card/BasicInfo";
import BaseToken from "../components/Card/BaseToken";
import QuoteToken from "../components/Card/QuoteToken";
import Price from "../components/Card/Price";
// import { data as SearchedData } from "../components/Search/Search";

const TokenAddress = () => {
	const tokenAddress = useLoaderData();

	// console.log(tokenAddress)
	const param = useParams();
	console.log("Useparam: ", param.id)

	const data = tokenAddress.pairs;

	return (
		<div>
			<h1 className="font-bold">Token Search Result</h1>
			<p>{param.id}</p>
			<div className="overflow-y-auto h-[32.4rem]">
				{data ? (
					data.slice(0, 10).map((pair) => (
						<div className="grid grid-cols-1 my-4 mb-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 justify-around ">
							<BasicInfo
								pairCreatedAt={pair["pairCreatedAt"]}
								symbol={pair["baseToken"]["symbol"]}
								dexID={pair["dexId"].slice(0, 4)}
								pairAdd={pair["pairAddress"].slice(0, 4)}
							></BasicInfo>
							<BaseToken
								name={pair["baseToken"]["name"]}
								symbol={pair["baseToken"]["symbol"]}
								address={pair["baseToken"]["address"].slice(
									0,
									4
								)}
							></BaseToken>
							<QuoteToken
								name={pair["baseToken"]["name"]}
								symbol={pair["baseToken"]["symbol"]}
								address={pair["baseToken"]["address"].slice(
									0,
									4
								)}
							></QuoteToken>
							<Price
								priceNative={parseFloat(
									pair["priceNative"]
								).toFixed(2)}
								priceUSD={pair["priceUsd"]}
							></Price>
						</div>
					))
				) : (
					<p>No Data Available</p>
				)}
			</div>
		</div>
	);
};

export default TokenAddress;

export async function tokenAddressLoader({ request, params })
{
	const tokenId = params.id;
	console.log("Token ID is: ", tokenId);
	const response = await fetch(
		`https://api.dexscreener.com/latest/dex/tokens/${tokenId}` 
	);
	return response;
}
