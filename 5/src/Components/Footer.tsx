import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer className="flex flex-col items-center justify-between bg-blue-600 p-6 px-14 text-center text-white md:flex-row md:items-center">
			<div className="flex flex-col gap-3">
				<div className="text-lg font-semibold">Sobre o Processei</div>
				<p className="max-w-xs">
					O Processei permite que autores de ações judiciais acompanhem seus
					processos de forma simples e eficaz, sem a necessidade de um advogado.
				</p>
				<div>
					<p className="font-semibold">
						Email:
						<span className="font-normal"> processeicontato@gmail.com</span>
					</p>
					<p className="font-semibold">
						Telefone: <span className="font-normal">(83) 99931-4290</span>
					</p>
				</div>
			</div>
			<div className="mt-6 flex flex-col gap-3 md:mt-0">
				<p className="font-semibold">Links Rápidos</p>
				<div className="flex flex-col space-y-1">
					<Link to="/" className="hover:underline">
						Home
					</Link>

					<Link to="/sobre" className="hover:underline">
						Sobre Nós
					</Link>

					<Link to="/planos" className="hover:underline">
						Planos
					</Link>

					<Link to="/contato" className="hover:underline">
						Contato
					</Link>
				</div>
			</div>
			<div className="mt-6 flex flex-col gap-3 md:mt-0">
				<p className="font-semibold">Categorias</p>
				<div className="flex flex-col space-y-1">
					<Link to="/acompanhamento" className="hover:underline">
						Acompanhamento Judicial
					</Link>

					<Link to="/consultoria" className="hover:underline">
						Consultoria
					</Link>

					<Link to="/direitos" className="hover:underline">
						Direitos do Consumidor
					</Link>

					<Link to="/planejamento" className="hover:underline">
						Planejamento Jurídico
					</Link>
				</div>
			</div>

			<p className="mt-6 md:mt-0">
				© 2024 Processei. Todos os direitos reservados.
			</p>
		</footer>
	);
}
