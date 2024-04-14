import { OPEN_AI_KEY, OPEN_AI_URL } from '$env/static/private';
import type { RequestHandler } from '@sveltejs/kit';
import { OpenAI } from 'openai';

export const POST: RequestHandler = async ({ request }) => {
	const openai = new OpenAI({
		apiKey: OPEN_AI_KEY,
		baseURL: OPEN_AI_URL,
		dangerouslyAllowBrowser: true
	});
	const prompt = await request.json();
	async function main() {
		const chatCompletion = await openai.chat.completions.create({
			messages: [
				{
					role: 'system',
					content: 'Pretending you are a world-class chef, please generate a recipe for a'
				},
				{ role: 'user', content: prompt }
			],
			model: 'gpt-3.5-turbo'
		});
		return chatCompletion.choices[0].message.content;
	}
	const recipe = await main();
	return new Response(recipe);
};
