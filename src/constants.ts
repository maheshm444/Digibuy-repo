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
	'CATEGORY_LIST':'CATEGORY_LIST',
	'SUBCATEGORIES':'SUBCATEGORIES',
	'BANNER':'BANNER',
	'PRODUCT_ITEM':'PRODUCT_ITEM',
	'IMAGE_CAROUSEL':'IMAGE_CAROUSEL',
	'PRODUCT_HEADER':'PRODUCT_HEADER',
	'SIZE_SELECTOR':'SIZE_SELECTOR',
	'DETAIL_BOX':'DETAIL_BOX',
	'DETAILS':'DETAILS',
	'BUTTON':'BUTTON',
	'CART_SCREEN':'CART_SCREEN',
	'SUBTOTAL':'SUBTOTAL',
	'SIGNOUT':'SIGNOUT'
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