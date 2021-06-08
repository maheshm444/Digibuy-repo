 export const SCREENS = {
	'DYNAMIC_PAGE': 'DYNAMIC_PAGE',
	'LOGIN': 'LOGIN',
	'SEARCH': 'SEARCH',
	'HOME': 'HOME'
}

export const SCREEN_TO_URL = {
	[SCREENS.HOME]: '/'
}

export function getUrlFromScreen(screen: string) {
	return SCREEN_TO_URL[screen];
}

export const COMPONENT_TYPE = {
	'CATEGORIES': 'CATEGORIES'
}

export interface ComponentType {
	type: string,
	data: any //remove any
}

export interface ImageValue {
	url: string,
	height: number,
	width: number
}

export interface TextValue {
	type: string,
	value: string
}