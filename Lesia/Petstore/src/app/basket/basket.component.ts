import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  items;
  checkoutForm;

  constructor(private basketService: BasketService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: ''
    });
   }

  ngOnInit(): void {
    this.items = this.basketService.getItems();
  }

  onSubmit(customerData) {
    // Process checkout data here

    console.warn('Your order has been submitted', customerData);
    this.items = this.basketService.clearBasket();
    this.checkoutForm.reset();
  }

}
