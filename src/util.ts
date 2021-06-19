import homeJson from './mocks/home.json';
import subCategoriesJson from './mocks/subCategories.json';
import productListJson from './mocks/productList.json';
import productPageJson from './mocks/productPage.json';
import productPageJson2 from './mocks/productPage2.json';
import manCategoryJson from './mocks/menCategory.json'
import womenCategoryJson from './mocks/womenCategory.json'
import kidsCategoryJson from './mocks/kidsCategory.json'
import tShirtJson from './mocks/tShirt.json'
import productJson from './mocks/product.json'
import cartJson from './mocks/cart.json'
export function fetchData(url) {
	if(url === '/') {
		return homeJson;
	} else if(url === '/productList'){
		return productListJson;
	}else if(url === '/category/men'){
		return manCategoryJson;
	}else if(url === '/category/women'){
		return womenCategoryJson;
	}else if(url === '/category/kids'){
		return kidsCategoryJson;
	}else if(url === '/men/tShirts'){
		return tShirtJson;
	}else if(url === '/products?id=1'){
		return productJson;
	}else if(url === '/cart'){
		return cartJson;
	}
	 else if(url === '/productPage?id=1') {
		return productPageJson;
	} else if(url === '/productPage?id=2') {
		return productPageJson2;
	} else return subCategoriesJson;
}