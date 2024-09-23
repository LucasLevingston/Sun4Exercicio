import React from 'react';
import { Link } from 'react-router-dom';
import { PlanType } from '../types/PlanType';
import { toast } from 'react-toastify';

export interface PlanCardProps {
	plan: PlanType;
}

const PlanCard: React.FC<PlanCardProps> = ({
	plan: { title, price, description },
}) => {
	const handleSubscribe = (planName: string) => {
		toast.success(`Você escolheu o ${planName}!`);
	};
	return (
		<div className="flex flex-col justify-between gap-2 rounded-lg border bg-gray-100 p-6 shadow-md">
			<h3 className="text-xl font-semibold">{title}</h3>
			<p className="mt-4 text-2xl font-bold">{price}</p>
			<p className="mt-4">{description}</p>
			<div className="flex items-center justify-between">
				{/* Here id would be used */}
				<Link to="/" className="text-blue-400">
					Saiba mais +
				</Link>
				<button
					className="rounded-lg bg-blue-500 px-4 py-2 font-bold text-white shadow-lg transition hover:bg-blue-400"
					onClick={() => handleSubscribe(title)}
				>
					Assinar
				</button>
			</div>
		</div>
	);
};

export default PlanCard;
