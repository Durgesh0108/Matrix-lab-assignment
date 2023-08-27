import React from 'react'
import Card from './Card'
import { MdOutlineToken } from "react-icons/md";

const QuoteToken = (props) => {
  return (
		<Card>
			<h1>Quote Token</h1>
			<div className="content text-xs my-2">
				<div className="data flex justify-between">
					<p>Name</p>
					<span className="font-normal">{props.name}</span>
				</div>
				<div className="data flex justify-between">
					<p>Symbol</p>
					<span className="font-normal">{props.symbol}</span>
				</div>
				<div className="data flex justify-between">
					<p>Address</p>
					<span className="font-normal">#{props.address}</span>
				</div>
			</div>
			<div className="bg-pink-600 border-2 rounded-full p-1 inline-block">
				<MdOutlineToken />
			</div>
		</Card>
  );
}

export default QuoteToken
