import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {
  private categorylist;
  private apptitle = 'Product Log';
  private element;
  private selecttitle = 'All';
  private selectedproduct = 'All';
  constructor(public _httpproductservice:ProductserviceService) { }

  ngOnInit() {    
    this._httpproductservice.getProductList().subscribe((data :Product[])=> {
      this.categorylist = new Set(data.map(a =>  a.type));
      console.log(this.categorylist);
    },
    error => console.log('Server error'),
  );  
  } 

public get categorylistGet() : string[] {
  return this.categorylist; 
}

public get httpgetservice(){
  return this._httpproductservice;
}

valueSelected(selectedvalue:string){    
     this.selectedproduct = selectedvalue;    
  }

}
