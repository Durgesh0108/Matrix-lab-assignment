import React from "react";
import Card from "./Card";
import { BiInfoCircle } from "react-icons/bi";

const BasicInfo = (props) => {
	return (
		<Card>
			<div>
				<h1>Basic Info</h1>
				<div className="content text-xs my-2">
					<div className="data flex justify-between">
						<p>Pair created at</p>
						<span className="font-normal">
							{props.pairCreatedAt}
						</span>
					</div>
					<div className="data flex justify-between">
						<p>Symbol</p>
						<span className="font-normal">{props.symbol}</span>
					</div>
					<div className="data flex justify-between">
						<p>Dex ID</p>
						<span className="font-normal">#{props.dexID}</span>
					</div>
					<div className="data flex justify-between">
						<p>Pair Address</p>
						<span className="font-normal">#{props.pairAdd}</span>
					</div>
				</div>
				<div className="bg-pink-600  border-2 rounded-full p-1 inline-block">
					<BiInfoCircle />
				</div>
			</div>
		</Card>
	);
};

export default BasicInfo;
