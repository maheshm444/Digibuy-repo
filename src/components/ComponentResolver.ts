import { COMPONENT_TYPE } from '../constants';
import CategoriesComponent from './CategoriesComponent/CategoriesComponent';


export function getComponent(type: string) {
	switch(type) {
		case COMPONENT_TYPE.CATEGORIES:
			return CategoriesComponent
		default:
			return null;

	}
}