import homeJson from './mocks/home.json';
import subCategoriesJson from './mocks/subCategories.json';
import productListJson from './mocks/productList.json';
import productPageJson from './mocks/productPage.json';


export function fetchData(url) {
	if(url === '/') {
		console.log("homejson", homeJson);
		return homeJson;
	} else if(url === '/productList'){
		return productListJson;
	} else if(url === '/productPage') {
		return productPageJson;
	} else return subCategoriesJson;
}