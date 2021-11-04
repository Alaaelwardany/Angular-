import { Product } from './../../_models/product.models';
import { Component, EventEmitter, Input ,OnInit, Output  } from '@angular/core';
import { productService } from 'src/app/_services/productService.service';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],

})
export class ItemComponent implements OnInit {
 @Input() product! : Product;
//  @Output() itemAdded = new EventEmitter<product>();


  constructor( private productService : productService) {
    // this.product = {
    //   name:'laptop' ,
    //   price:900 ,
    //   imgUrl:'assets/img/layout-styles.png',
    //   discount:50

    // }

  }



  getPrice(){
    return this.product.discount
    ?this.product.price-this.product.discount
    :this.product.price;
  }


  itemAddedToCart(){
    // const message = `item ${this.product.name} has been added`
    // alert(message)
    // console.log(htmlEL)
    // htmlEL.value=this.product.price.toString();
    this.productService.itemAdded.emit(this.product)
  }

deletThisProduct(){
  this.productService.deletItem.emit(this.product);
}
ngOnInit():void{

}

}
