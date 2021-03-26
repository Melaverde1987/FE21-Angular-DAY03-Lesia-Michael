import { Component, OnInit } from '@angular/core';
import { siteItems } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products = siteItems;
  
  constructor() { }

  ngOnInit(): void {
  }

}
