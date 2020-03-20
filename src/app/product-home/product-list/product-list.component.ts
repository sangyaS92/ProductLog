import { Component, OnInit,Input,OnChanges } from '@angular/core';
import{ProductserviceService} from '../../services/productservice.service';
import {Product} from '../../interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private productlist;
  private element;
  private _selectedvalue;
  @Input() category:string;

    constructor(private _httpproductservice:ProductserviceService) { }

  ngOnInit() {
   
    
      this._httpproductservice.getProductList().subscribe((data:Product[] )=> {
        // console.log(this.category);
         this.element=data;
         this.productlist=data;
         console.log(this.productlist);
        });
      
    
    // this.productlist=data.filter(item => item.name === this.category);
    

  }

  ngOnChanges(){
  /* this._httpproductservice.filterProduct$.subscribe(category=>{this._selectedvalue = category},
      error => console.log('Server error'),
      );
      console.log(this._selectedvalue);*/
    this._httpproductservice.getProductList().subscribe((data:Product[] )=> {
       console.log(this.category);
      this._selectedvalue = this.category;
       this.element=data;
       if(this._selectedvalue === 'All')
       this.productlist=data;
       else
       this.productlist=data.filter(item => item.type.includes(this._selectedvalue) );
       console.log(this.productlist);
      });
  }

  

}
