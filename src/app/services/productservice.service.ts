import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  private _filterProductSource = new Subject<String>();
  filterProduct$ = this._filterProductSource.asObservable();
  constructor(private http: HttpClient) { 
    
  }

  getProductList() {
    return this.http.get("./assets/products.json");
  }

 
  sendFilterProduct(category:string){
    this._filterProductSource.next(category);
  }



}
