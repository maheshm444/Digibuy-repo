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
import ProductHeader from './ProductHeader';
import SizeSelector from './SizeSelector';
import DetailBox from './DetailBox';
import Details from './Details';
import ButtonComponent from './ButtonComponent';
import Cart from './Cart';
import SubTotal from './SubTotal';


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
		case COMPONENT_TYPE.PRODUCT_HEADER:
			return ProductHeader;
		case COMPONENT_TYPE.SIZE_SELECTOR:
			return SizeSelector;
		case COMPONENT_TYPE.DETAIL_BOX:
			return DetailBox;
		case COMPONENT_TYPE.DETAILS:
			return Details;
		case COMPONENT_TYPE.BUTTON:
			return ButtonComponent;
		case COMPONENT_TYPE.SUBTOTAL:
			return SubTotal;
		case COMPONENT_TYPE.CART_SCREEN:
			return Cart;
		default:
			return null;

	}
}