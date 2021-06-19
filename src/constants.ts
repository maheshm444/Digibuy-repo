 export const SCREENS = {
	'DYNAMIC_PAGE': 'DYNAMIC_PAGE',
	'LOGIN': 'LOGIN',

	'HOME': 'HOME'
}

export const SCREEN_TO_URL = {
	[SCREENS.HOME] : '/'
}

export function getUrlFromScreen(screen: string) {
	return SCREEN_TO_URL[screen];
}

export const COMPONENT_TYPE = {
	// 'CATEGORIES': 'CATEGORIES',
	// 'IMAGE': 'IMAGE',
	// 'CARAUSEL': 'CARAUSEL',
	// 'PRODUCT_LIST_CARD': 'PRODUCT_LIST_CARD',
	'CATEGORY_LIST':'CATEGORY_LIST',
	'SUBCATEGORIES':'SUBCATEGORIES',
	'BANNER':'BANNER',
	'PRODUCT_ITEM':'PRODUCT_ITEM',
	'IMAGE_CAROUSEL':'IMAGE_CAROUSEL'
}

// export interface ComponentType {
// 	type: string,
// 	data: any //remove any
// }

// export interface ImageValue {
// 	url: string,
// 	height: number,
// 	width: number
// }

// export interface TextValue {
// 	type: string,
// 	value: string
// }