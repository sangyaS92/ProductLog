import { ProductserviceService } from './productservice.service';
import { Product } from '../interfaces/product';
import { of } from 'rxjs'

describe('ProductserviceService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let productservice:ProductserviceService;
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    productservice = new ProductserviceService(<any> httpClientSpy);
  });

  it('should be created', () => {
    const expectedProducts: Product[] =
    [
      {
        "index": 0,
        "isSale": false,
        "price": "$49.99",
        "productImage": "Product_1.jpeg",
        "productName": "Pure Blonde Crate",
        "type": "Beer"
      },
      {
        "index": 1,
        "isSale": true,
        "price": "$14.99",
        "productImage": "Product_2.jpeg",
        "productName": "Victoria Bitter 4x6x375ml",
        "type": "Beer"
      }];

      httpClientSpy.get.and.returnValue(of(expectedProducts));
      productservice.getProductList().subscribe(
        products => expect(products).toEqual(expectedProducts, 'expected productlist'),
        fail
      );
    
  });

 
});
