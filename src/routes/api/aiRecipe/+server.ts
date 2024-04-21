import { Groq } from 'groq-sdk';
import type { RequestHandler } from '@sveltejs/kit';
import { AI_API_KEY } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
	const groq = new Groq({
		apiKey: AI_API_KEY
	});
	const prompt = await request.json();
	const chatCompletion = await groq.chat.completions.create({
		messages: [
			{
				role: 'system',
				content: 'Pretending you are a world-class chef, please generate a recipe for a'
			},
			{ role: 'user', content: prompt }
		],
		model: 'mixtral-8x7b-32768'
	});

	const recipe = chatCompletion.choices[0].message.content;
	return new Response(recipe);
};
