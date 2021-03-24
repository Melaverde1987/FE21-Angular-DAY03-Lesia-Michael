import { Component, OnInit } from '@angular/core';

import { products } from '../product';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit(): void {
  }

}