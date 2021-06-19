import { COMPONENT_TYPE } from '../constants';
import CategoriesComponent from './CategoriesComponent/CategoriesComponent';
import ImageComponent from './ImageComponent/ImageComponent';
import CaraouselComponent from './CarauselComponent/CarauselComponent';
import ProductListCard from './ProductListCard/ProductListCard';
import categoryList from './CategoryList';
import SubCategories from './SubCategories';
import BannerItem from './BannerItem';
import ProductItem from './ProductItem';
import ImageCarousel from './ImageCarousel';


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
		case COMPONENT_TYPE.CATEGORY_LIST:
			return categoryList;
		case COMPONENT_TYPE.SUBCATEGORIES:
			return SubCategories;
		case COMPONENT_TYPE.BANNER:
			return BannerItem;
		case COMPONENT_TYPE.PRODUCT_ITEM:
			return ProductItem;
		case COMPONENT_TYPE.IMAGE_CAROUSEL:
			return ImageCarousel;
		default:
			return null;

	}
}