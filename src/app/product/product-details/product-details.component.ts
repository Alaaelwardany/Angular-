import { productService } from 'src/app/_services/productService.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/product.models';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;
  relatedProductArray: Product[] = [];
  constructor(
    private productService: productService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.activatedRoute.params.subscribe(
      (res) => {
      const product = this.productService.getProductById(res.id);
      if (!product) {
        alert('error here');
      } else {
        this.product = product;
        this.relatedProductArray = [];
        this.product.relatedProductsIds?.map((id) => {
          const rProduct = this.productService.getProductById(id);
          rProduct && this.relatedProductArray.push(rProduct);
        });
      }
    });
  }
}
