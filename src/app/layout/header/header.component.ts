import { productService } from 'src/app/_services/productService.service';
import { Product } from './../../_models/product.models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {
 arrayOfProducts :Product[] = [];
 Product:Product[] = this.productService.products;

  constructor(private productService : productService) {

  };

  ngOnInit():void{
    
    this.productService.itemAdded.subscribe(
      (next) => {
        this.arrayOfProducts.push(next)
        console.log(next)
      },

      (error) => {

      },

      () => {

        }
   )
  }
}