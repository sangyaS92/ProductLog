import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http: HttpClient) {    
  }

  getProductList() {
    return this.http.get("./assets/products.json");
  }

}
