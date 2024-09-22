import { z } from 'zod';

export const contactSchema = z.object({
	name: z.string().min(1, 'Nome é obrigatório.'),
	email: z.string().email('Email inválido.'),
	message: z.string().min(1, 'Mensagem é obrigatória.'),
});
