import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {
  @Input()product:Product;
  constructor() { }

  ngOnInit() {
  }

}
