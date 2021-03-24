import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { products } from '../product';
import { BasketService } from '../basket.service';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  constructor(private route: ActivatedRoute, private basketService: BasketService) { }

  addToBasket(product) {

    window.alert('Your product has been added to the cart!');

    this.basketService.addToBasket(product);

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}
