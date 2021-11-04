import { productService } from './../../_services/productService.service';
import { Tags } from './../../_models/tag.model';
import { payment } from 'src/app/_models/payment.model';
import { PaymentTypeService } from './../../_sevices/payment.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { category } from 'src/app/_models/category.model';
import { Product } from 'src/app/_models/product.models';
import {CategoryServiceService} from './../../_service/category-service.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl:'./add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  categories!: category[];
  paymentTypeMethod!: payment[];
  product=<Product>{};
  isEditMode = false;

  @ViewChild('myForm') form! : ElementRef;

  constructor(
    private CategoryServiceService: CategoryServiceService,
    private PaymentTypeService: PaymentTypeService,
    private productService: productService,
    private router : Router,
    private activatedRoute : ActivatedRoute,
  ) {
    this.product={
        id:1,
      basicData:[
        {
          id:1,
          name:'',
          description:'',
          language:[{id:1,name:'english'}],
        },
      ],
      category:{id:1,categoryName:'arts'},
       paymentTypeMethod:[{id:1,name:'visa'}],
       Tags:[],
       price:100,
       discount:50,
      imgUrls:['assets/img/canon.jpg']
      }
  }

  ngOnInit(): void {
    this.categories = this.CategoryServiceService.getAllCategories();
    this.paymentTypeMethod = this.PaymentTypeService.getAllPaymentTypes();
   const id = this.activatedRoute.snapshot.params.id;
  const product = this.productService.getProductById(+id);
  if (product){
    this.product = {...product};
    this.isEditMode = true ;
  }

  }

  onSubmit(form: NgForm) {
    // this.product={
    //   id:1,
    // basicData:[
    //   {
    //     id:1,
    //     name:'',
    //     description:'',
    //     language:[{id:1,name:'english'}],
    //   },
    // ],
    // category:{id:1,categoryName:'arts'},
    // //  payment:[{id:1,name:'visa'}],
    // //  Tags:[{id:1, name:'nike'}],
    // //  price:100,
    // //  discount:50,
    // // imgUrls:['assets/img/canon.jpg']
    // // }
    // // const cat = this.categoryService.getCategoryById(+form.value.category);
    // // this.product = {
    // // basicData:[
    // //   {
    // //     name:form.value.nameInputField,
    // //     description:form.value.descInputField,
    // //     language:[{id:1,name:'english'}],
    // //   },
    // // ],
    // category:{categoryName:'arts'},
    //  payment:[{id:1,name:'visa'}],
    //  Tags:[{id:1, name:'nike'}],
    //  price:100,
    //  discount:50,
    // imgUrls:['assets/img/canon.jpg']
    // }

    // this.product= {...form.value}
    const cat = this.CategoryServiceService.getCategoryById(+form.value.category)
    // this.product.basicData[0].name=form.value.nameInputField;
    // this.product.basicData[0].name=form.value.descInputField;
    if (cat){
      this.product.category=cat;
    }
    // console.log((this.nameInput.nativeElement as HTMLInputElement).value);
    for (let index=0 ; index<this.paymentTypeMethod.length ; index++){
      if(form.value['check_'+index] ) {
         this.product.paymentTypeMethod.push(this.paymentTypeMethod[index]);
       }
    }
    // console.log(this.product);
    if(this.isEditMode){
      this.productService.updateProduct(this.product)
    }else{
      this.productService.addProduct(this.product)
    }


    this.router.navigateByUrl('home');
  }


onTagAdded(tagInput:HTMLInputElement){
  this.product.Tags?.push({name :tagInput.value})
  tagInput.value ='';
}
}
