import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductserviceService } from '../services/productservice.service';
import { Observable,of } from 'rxjs'
import { ProductHomeComponent } from './product-home.component';
import { Product } from '../interfaces/product';

describe('ProductHomeComponent', () => {
  let component: ProductHomeComponent;
  let fixture: ComponentFixture<ProductHomeComponent>;
  const product:Product[]=[
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
    "type": "Cider"
  }];

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      declarations: [ ProductHomeComponent ],
    providers: [
        {
            provide: ProductserviceService ,
            useValue: {
                getProductList(){return of(this.product)}
            }
        }
    ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 /* it('should create', () => {
    expect(component).toBeTruthy();
  });*/

  it('should fetch on ngOnInit', () => {
    const data:Product[]=[
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
      "type": "Cider"
    }];
    
    const fetchUserSpy = spyOn(
      component._httpproductservice,
      'getProductList'
  ).and.returnValue( of(data) );
  
  component.ngOnInit();
  expect(fetchUserSpy).toHaveBeenCalled();
  
  let category =["Beer"];
  
 // expect(component.categorylistGet).toBe( category);
  });
});




