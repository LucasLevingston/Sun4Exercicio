import React, { useState } from 'react';
import PlanCard from '../Components/PlanCard';
import Header from '../Components/Header';
import { planData } from '../data/PlanData';
import Container from '../Components/Container';
import { toast } from 'react-toastify';
import Footer from '../Components/Footer';
import { contactSchema } from '../schemas/ContactSchema';
import { z } from 'zod';

const Home: React.FC = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [errors, setErrors] = useState<{
		name?: string;
		email?: string;
		message?: string;
	}>({});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			contactSchema.parse(formData);
			toast.success('Email enviado, entraremos em contato com você!');
			setFormData({ name: '', email: '', message: '' });
			setErrors({});
		} catch (error) {
			if (error instanceof z.ZodError) {
				const fieldErrors = error.flatten().fieldErrors;
				setErrors(fieldErrors);
			}
		}
	};

	return (
		<Container>
			<div className="flex min-h-screen flex-col bg-gray-100">
				<Header />
				<main className="flex flex-col gap-6 p-6 px-14">
					<div className="text-start">
						<h2 className="mb-4 text-3xl font-semibold">Sobre o Processei</h2>
						<p className="text-lg">
							O Processei é uma plataforma que permite que autores de ações
							judiciais acompanhem seus processos de forma simples e eficiente,
							sem a necessidade de um advogado. Tenha controle total sobre seus
							processos com nossos planos acessíveis!
						</p>
					</div>

					<div className="flex flex-col gap-3 rounded-md border border-black p-4 shadow-lg">
						<p className="text-xl font-semibold">
							Comece agora mesmo a simplificar sua jornada judicial! Escolha o
							plano ideal para você.
						</p>
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{planData.map((plan) => (
								<PlanCard plan={plan} key={plan.title} />
							))}
						</div>
					</div>

					<div>
						<h2 className="mb-4 text-3xl font-semibold">Entre em Contato</h2>
						<form
							className="max-w-md space-y-4 rounded-lg border bg-white p-6 shadow-md"
							onSubmit={handleSubmit}
						>
							<div className="space-y-1">
								<label className="block text-gray-700">Nome</label>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleChange}
									className={`w-full border border-gray-400 p-2 shadow-lg ${
										errors.name ? 'border-red-500' : 'border-gray-300'
									} rounded-lg`}
								/>
								{errors.name && (
									<p className="text-sm text-red-500">{errors.name}</p>
								)}
							</div>
							<div className="space-y-1">
								<label className="block text-gray-700">Email</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									className={`w-full border border-gray-400 p-2 shadow-lg ${
										errors.email ? 'border-red-500' : 'border-gray-300'
									} rounded-lg`}
								/>
								{errors.email && (
									<p className="text-sm text-red-500">{errors.email}</p>
								)}
							</div>
							<div className="space-y-1">
								<label className="block text-gray-700">Mensagem</label>
								<textarea
									name="message"
									value={formData.message}
									onChange={handleChange}
									className={`w-full border border-gray-400 p-2 shadow-lg ${
										errors.message ? 'border-red-500' : 'border-gray-300'
									} rounded-lg`}
									rows={4}
								></textarea>
								{errors.message && (
									<p className="text-sm text-red-500">{errors.message}</p>
								)}
							</div>
							<button
								type="submit"
								className="w-full rounded bg-blue-600 py-2 text-white"
							>
								Enviar
							</button>
						</form>
					</div>
				</main>
				<Footer />
			</div>
		</Container>
	);
};

export default Home;
