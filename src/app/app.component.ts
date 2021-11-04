import { Product } from './_models/product.models';
import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ProductArray : Product[]=[]
  buttonClicked = 'add-Product';
  title = 'APPone';
  // output(Product:Product){
  //   console.log(Product)
  //   this.ProductArray.push(Product);
  // }
}
