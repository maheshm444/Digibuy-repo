import homeJson from './mocks/home.json';
import subCategoriesJson from './mocks/subCategories.json';
import productListJson from './mocks/productList.json';
import productPageJson from './mocks/productPage.json';
import productPageJson2 from './mocks/productPage2.json';
import manCategoryJson from './mocks/menCategory.json';
import womenCategoryJson from './mocks/womenCategory.json';
import kidsCategoryJson from './mocks/kidsCategory.json';
import tshirtmen from './mocks/tshirtmen.json';
import productJson from './mocks/product.json';
import cartJson from './mocks/cart.json'
import newLink from "./mocks/newLink.json"
// import menProducts1 from './mocks/menProducts1.json';
import topWomen from './mocks/topWomen.json';
import jeanWomen from './mocks/jeanWomen.json';
import womenproducts1 from './mocks/womenproducts1.json';
import womenproducts2 from './mocks/womenproducts2.json';
import womenproducts3 from './mocks/womenproducts3.json';
import womenproducts4 from './mocks/womenproducts4.json';
import womenproducts5 from './mocks/womenproducts5.json';
import womenproducts6 from './mocks/womenproducts6.json';
import womenproducts7 from './mocks/womenproducts7.json';
import womenproducts8 from './mocks/womenproducts8.json';
import womenproducts9 from './mocks/womenproducts9.json';
import womenproducts10 from './mocks/womenproducts10.json';
import sneakerWomen from './mocks/sneakerWomen.json';
import womenproducts11 from './mocks/womenproducts11.json';
import womenproducts12 from './mocks/womenproducts12.json';
import womenproducts13 from './mocks/womenproducts13.json';
import womenproducts14 from './mocks/womenproducts14.json';
import womenproducts15 from './mocks/womenproducts15.json';
import gogglesWomen from './mocks/gogglesWomen.json';
import womenproducts16 from './mocks/womenproducts16.json';
import womenproducts17 from './mocks/womenproducts17.json';
import womenproducts18 from './mocks/womenproducts18.json';
import womenproducts19 from './mocks/womenproducts19.json';
import womenproducts20 from './mocks/womenproducts20.json';
import hatWomen from './mocks/hatWomen.json';
import womenproducts21 from './mocks/womenproducts21.json';
import womenproducts22 from './mocks/womenproducts22.json';
import womenproducts23 from './mocks/womenproducts23.json';
import womenproducts24 from './mocks/womenproducts24.json';
import womenproducts25 from './mocks/womenproducts25.json';

//kids
import kidsEthnicWear from './mocks/kidsEthnicWear.json'
import kidsProducts1 from './mocks/kidsProducts1.json'

export function fetchData(url) {
  if (url === '/') {
    return homeJson;
  } else if (url === '/productList') {
    return productListJson;
  } else if (url === '/category/men') {
    return manCategoryJson;
  } else if (url === '/category/women') {
    return womenCategoryJson;
  } else if (url === '/category/kids') {
    return kidsCategoryJson;
  } else if (url === '/men/tShirts') {
    return tshirtmen;
  } else if (url === '/products?id=1') {
    return productJson;
  } else if (url === '/cart') {
    return cartJson;
  } else if (url === '/productPage?id=1') {
    return productPageJson;
  } else if (url === '/productPage?id=2') {
    return productPageJson2;
  } else if (url === 'women/top') {
    return topWomen;
  } else if (url === '/womenproducts?id=1') {
    return womenproducts1;
  } else if (url === '/womenproducts?id=2') {
    return womenproducts2;
  } else if (url === '/womenproducts?id=3') {
    return womenproducts3;
  } else if (url === '/womenproducts?id=4') {
    return womenproducts4;
  } else if (url === '/womenproducts?id=5') {
    return womenproducts5;
  } else if (url === 'women/jens') {
    return jeanWomen;
  } else if (url === '/womenproducts?id=6') {
    return womenproducts6;
  } else if (url === '/womenproducts?id=7') {
    return womenproducts7;
  } else if (url === '/womenproducts?id=8') {
    return womenproducts8;
  } else if (url === '/womenproducts?id=9') {
    return womenproducts9;
  } else if (url === '/womenproducts?id=10') {
    return womenproducts10;
  } else if (url === 'women/sneakers') {
    return sneakerWomen;
  } else if (url === '/womenproducts?id=11') {
    return womenproducts11;
  } else if (url === '/womenproducts?id=12') {
    return womenproducts12;
  } else if (url === '/womenproducts?id=13') {
    return womenproducts13;
  } else if (url === '/womenproducts?id=14') {
    return womenproducts14;
  } else if (url === '/womenproducts?id=15') {
    return womenproducts15;
  } else if (url === 'women/goggles') {
    return gogglesWomen;
  } else if (url === '/womenproducts?id=16') {
    return womenproducts16;
  } else if (url === '/womenproducts?id=17') {
    return womenproducts17;
  } else if (url === '/womenproducts?id=18') {
    return womenproducts18;
  } else if (url === '/womenproducts?id=19') {
    return womenproducts19;
  } else if (url === '/womenproducts?id=20') {
    return womenproducts20;
  } else if (url === 'women/hats') {
    return hatWomen;
  } else if (url === '/womenproducts?id=21') {
    return womenproducts21;
  } else if (url === '/womenproducts?id=22') {
    return womenproducts22;
  } else if (url === '/womenproducts?id=23') {
    return womenproducts23;
  } else if (url === '/womenproducts?id=24') {
    return womenproducts24;
  } else if (url === '/womenproducts?id=25') {
    return womenproducts25;
  }else if (url === 'kids/ethnicWear') {
    return kidsEthnicWear;
  }
  else if (url === '/kidsProducts?id=1') {
    return kidsProducts1;
  }else if (url === '/newLink') {
    return newLink;
  }
  
   else {
    return subCategoriesJson;
  }
}
