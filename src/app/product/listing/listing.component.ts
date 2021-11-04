import { Filter } from './../../_models/filter.model';
import { category } from './../../_models/category.model';
import { Product } from './../../_models/product.models';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  Input,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { productService } from 'src/app/_services/productService.service';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  @Input() ProductListArray: Product[];
  @Input() PageSize: number = 9;
  filterList: Filter[];
  numbersOfPagesarr: number[] = [];
  productArrayToBeViewed: Product[] = [];
  currentPage: number = 0;
  categoryList: category[] | undefined;
  @Input() pageSize!: number;

  constructor(private productService: productService) {
    this.ProductListArray = [
      // {name:'camera' , price:100 , discount:50, imgUrl:'assets/img/canon.jpg'},
      // {name:'laptop' , price:1000 , imgUrl:'assets/img/layout-styles.png'},
      // {name:'printer' , price:3100 , discount:50, imgUrl:'assets/img/canon-p.jpg'},
      // {name:'smartwatch' , price:300 , discount:50, imgUrl:'assets/img/smart.jpg'},
      // {name:'scanner' , price:2000 , discount:50, imgUrl:'assets/img/scanner.jpeg'},
      // {name:'iphone' , price:30000 , discount:50, imgUrl:'assets/img/iPhone-13.jpg'},
      // {name:'airpods' , price:100 , discount:50, imgUrl:'assets/img/airpods.jpeg'},
      // {name:'digitalcam' , price:100 , discount:50, imgUrl:'assets/img/sony.jpg'},
      // {name:'camera' , price:100 , discount:50, imgUrl:'assets/img/canon.jpg'},
      // {name:'laptop' , price:1000 , imgUrl:'assets/img/layout-styles.png'},
      // {name:'camera' , price:100 , discount:50, imgUrl:'assets/img/canon.jpg'},
      // {name:'laptop' , price:1000 , imgUrl:'assets/img/layout-styles.png'},
      // {name:'printer' , price:3100 , discount:50, imgUrl:'assets/img/canon-p.jpg'},
      // {name:'smartwatch' , price:300 , discount:50, imgUrl:'assets/img/smart.jpg'},
      // {name:'scanner' , price:2000 , discount:50, imgUrl:'assets/img/scanner.jpeg'},
      // {name:'iphone' , price:30000 , discount:50, imgUrl:'assets/img/iPhone-13.jpg'},
      // {name:'airpods' , price:100 , discount:50, imgUrl:'assets/img/airpods.jpeg'},
      // {name:'digitalcam' , price:100 , discount:50, imgUrl:'assets/img/sony.jpg'},
      // {name:'printer' , price:3100 , discount:50, imgUrl:'assets/img/canon-p.jpg'},
      // {name:'smartwatch' , price:300 , discount:50, imgUrl:'assets/img/smart.jpg'},
      // {name:'scanner' , price:2000 , discount:50, imgUrl:'assets/img/scanner.jpeg'},
      // {name:'iphone' , price:30000 , discount:50, imgUrl:'assets/img/iPhone-13.jpg'},
      // {name:'airpods' , price:100 , discount:50, imgUrl:'assets/img/airpods.jpeg'},
      // {name:'digitalcam' , price:100 , discount:50, imgUrl:'assets/img/sony.jpg'},
      // {name:'tablet' , price:100 , imgUrl:'assets/img/Sam.jpg'}
    ];

    this.categoryList = [
      { categoryName: 'Arts & Crafts' },
      { categoryName: 'Automotive' },
      { categoryName: 'Baby' },
      { categoryName: 'Books' },
      { categoryName: 'Eletronics' },
      { categoryName: "Women's Fashion" },
      { categoryName: "Men's Fashion" },
      { categoryName: 'Health & Household' },
      { categoryName: 'Home & Kitchen' },
      { categoryName: 'Military Accessories' },
      { categoryName: 'Movies & Television' },
      { categoryName: 'Sports & Outdoors' },
      { categoryName: 'Tools & Home Improvement' },
      { categoryName: 'Toys & Games' },
    ];

    this.filterList = [
      { filterName: 'Nike' },
      { filterName: 'Travel' },
      { filterName: 'Sport' },
      { filterName: 'Tv' },
      { filterName: 'Books' },
      { filterName: 'Tech' },
      { filterName: 'Addidas' },
      { filterName: 'Promo' },
      { filterName: 'Reading' },
      { filterName: 'Social' },
      { filterName: 'New' },
      { filterName: 'Specia' },
      { filterName: 'Food' },
      { filterName: 'Used' },
    ];
  }

  ngOnInit(): void {
    this.ProductListArray = this.productService.getAllProducts();
    this.productService;

    this.productService.deletItem.subscribe((next) => {
      this.productArrayToBeViewed = this.productService.deletProduct(next);
    });

    // const numberOfPages = Math.ceil(this.productListArray.length/this.pageSize);
    // for ( let index=0 ; index<numberOfPages ; index++){
    //   this.noOfPages.push(index+1)
    // }

    // this.=this.productListArray.slice(this.currentpage*this.pageSize,(this.currentpage*this.pageSize)+this.pageSize)
    this.sliceArray(this.ProductListArray);
    this.calcnumofPages();
  }

  calcnumofPages() {
    this.numbersOfPagesarr = [];
    const numbersOfPagesarr = Math.ceil(
      this.ProductListArray.length / this.PageSize
    );
    for (let index = 0; index < numbersOfPagesarr; index++) {
      this.numbersOfPagesarr.push(index + 1);
    }
  }

  newItemAdded(Product: Product) {
    console.log(Product);
  }

  sliceArray(product:Product[]) {
    this.productArrayToBeViewed = product.slice();
    this.currentPage * this.pageSize,
      this.currentPage * this.pageSize + this.pageSize;
  }

  onPagination(i: number) {
    if (i > -1 && i < this.numbersOfPagesarr.length) {
      this.currentPage = i;
      this.sliceArray(this.ProductListArray);
    }
  }

  arr: Product[] = [];

  @ViewChild('inputs') Inputs!: ElementRef;
  // search(item: HTMLInputElement) {
  //   if (item.value == '') {
  //     this.ProductListArray = this.productService.getAllProducts();
  //     console.log(this.ProductListArray);
  //   } else {
  //     //     // for (let i=0 ; i<this.ProductListArray.length;i++){
  //     //     //   if ( this.ProductListArray[i]?.basicData[0].name()
  //     //     //       this.ProductListArray[i]?.basicData[0].name===
  //     //     // item.value
  //     //     //  ) {
  //     //     this.arr.push(this.ProductListArray[i]);
  //     // }
  //     this.ProductListArray.map((product) => {
  //       product.basicData?.map((p) => {
  //         if (p.name === item.value) {
  //           this.arr.push(product);
  //         }
  //       });
  //     }); 
  //       this.ProductListArray = this.arr;
  //       console.log(this.ProductListArray)
  //       console.log(this.arr)
  //   }

 
  // }

  // // this.sliceArray();
  // // this.calcnumofPages();
  // // this.onPagination(1);
  // // }
  // // }

  // //

  search(item: HTMLInputElement) {
    //console.log(item);
    // console.log(item.value);
  //  this.productToBeViewed = [];
  let newProductArr:Product[]=[]
    if (item.value == "") {
      this.sliceArray(this.ProductListArray);
    }
    else {
      for (var i = 0; i < this.ProductListArray.length; i++) {
        if (this.ProductListArray[i].basicData[0].name===item.value) {
        // this.productToBeViewed.push(this.productArr[i]);
        newProductArr.push(this.ProductListArray[i]);
        console.log(this.ProductListArray[i])
        }
      
      }
      this.sliceArray(newProductArr)
      console.log(newProductArr)
    }
  }  

  searchAutoComplete(item: HTMLInputElement){
    if(item.value!=""){
      this.search(item);
    }
    
  }

}
