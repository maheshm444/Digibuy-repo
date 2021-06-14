import { COMPONENT_TYPE } from '../constants';
import CategoriesComponent from './CategoriesComponent/CategoriesComponent';
import ImageComponent from './ImageComponent/ImageComponent';
import CaraouselComponent from './CarauselComponent/CarauselComponent';
import ProductListCard from './ProductListCard/ProductListCard';


export function getComponent(type: string) {
	switch(type) {
		case COMPONENT_TYPE.CATEGORIES:
			return CategoriesComponent
		case COMPONENT_TYPE.IMAGE:
			return ImageComponent
		case COMPONENT_TYPE.CARAUSEL:
			return CaraouselComponent
		case COMPONENT_TYPE.PRODUCT_LIST_CARD:
			return ProductListCard;
		default:
			return null;

	}
}