import { z } from 'zod';

export const searchSchema = z.object({
	searchQuery: z.string().min(2).max(50)
});

export type SearchSchema = typeof searchSchema;

interface RecipeImage {
	url: string;
	width: number;
	height: number;
}

interface RecipeIngredient {
	text: string;
	quantity: number;
	measure: string;
	food: string;
	weight: number;
	foodId: string;
}

interface RecipeNutrient {
	label: string;
	quantity: number;
	unit: string;
}

interface RecipeDigest {
	label: string;
	tag: string;
	schemaOrgTag: string;
	total: number;
	hasRDI: boolean;
	daily: number;
	unit: string;
	sub: string;
}

interface Recipe {
	uri: string;
	label: string;
	image: string;
	images: {
		THUMBNAIL: RecipeImage;
		SMALL: RecipeImage;
		REGULAR: RecipeImage;
		LARGE: RecipeImage;
	};
	source: string;
	url: string;
	shareAs: string;
	yield: number;
	dietLabels: string[];
	healthLabels: string[];
	cautions: string[];
	ingredientLines: string[];
	ingredients: RecipeIngredient[];
	calories: number;
	glycemicIndex: number;
	inflammatoryIndex: number;
	totalCO2Emissions: number;
	co2EmissionsClass: string;
	totalWeight: number;
	cuisineType: string[];
	mealType: string[];
	dishType: string[];
	instructions: string[];
	tags: string[];
	externalId: string;
	totalNutrients: {
		[key: string]: RecipeNutrient;
	};
	totalDaily: {
		[key: string]: RecipeNutrient;
	};
	digest: RecipeDigest[];
}

interface RecipeHit {
	recipe: Recipe;
	_links: {
		self: {
			href: string;
			title: string;
		};
		next: {
			href: string;
			title: string;
		};
	};
}

export interface RecipeResponse {
	from: number;
	to: number;
	count: number;
	_links: {
		self: {
			href: string;
			title: string;
		};
		next: {
			href: string;
			title: string;
		};
	};
	hits: RecipeHit[];
}
