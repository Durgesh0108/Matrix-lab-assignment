import React from "react";
import Card from "./Card";
import { BiDollar } from "react-icons/bi";

const Price = (props) => {
	return (
		<Card>
			<h1>Price</h1>
			<div className="content text-xs my-2">
				<div className="data flex justify-between">
					<p>Price Native</p>
					<span className="font-normal">{props.priceNative}</span>
				</div>
				<div className="data flex justify-between">
					<p>Price USD</p>
					<span className="font-normal">{props.priceUSD}</span>
				</div>
			</div>
			<div className="bg-pink-600 border-2 rounded-full p-1 inline-block">
				<BiDollar />
			</div>
		</Card>
	);
};

export default Price;
