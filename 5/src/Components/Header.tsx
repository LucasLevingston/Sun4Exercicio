import { GiInjustice } from 'react-icons/gi';

export default function Header() {
	return (
		<header className="flex h-1/5 flex-col justify-between bg-blue-600 p-6 px-14 text-start text-white sm:flex-row sm:text-center">
			<div className="flex items-center gap-2 text-4xl">
				<GiInjustice />
				<h1 className="text-4xl font-bold">Processei</h1>
			</div>
			<p className="mt-2 text-lg">Acompanhe seus processos sem advogados!</p>
		</header>
	);
}
