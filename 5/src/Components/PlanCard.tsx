import React from 'react';

interface PlanCardProps {
	title: string;
	price: string;
	description: string;
	onSubscribe: () => void;
}

const PlanCard: React.FC<PlanCardProps> = ({
	title,
	price,
	description,
	onSubscribe,
}) => {
	return (
		<div className="rounded-lg border bg-gray-100 p-6 shadow-md">
			<h3 className="text-xl font-semibold">{title}</h3>
			<p className="mt-4 text-2xl font-bold">{price}</p>
			<p className="mt-4">{description}</p>
			<button
				className="mt-6 rounded-lg bg-blue-500 px-4 py-2 font-bold text-white shadow-lg transition hover:bg-blue-400"
				onClick={onSubscribe}
			>
				Assinar
			</button>
		</div>
	);
};

export default PlanCard;
