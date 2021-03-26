import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { siteItems } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(product: any){
    window.alert("Product added to the cart.")
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {
    console.table(this.route.paramMap);
    this.route.paramMap.subscribe(params => {
      console.log(params);
      console.table(this.route);
      let id = this.route.snapshot.params.Id;
      console.log(id);
      this.product = siteItems[id];
    });
    };
}
