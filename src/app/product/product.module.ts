import { category } from 'src/app/_models/category.model';
import { NgModule } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { ListingComponent } from './listing/listing.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from '../category/category/category.component';
import { FilterComponent } from '../category/filter/filter.component';

@NgModule({
  declarations: [
    FilterComponent,
    CategoryComponent,
    AddProductComponent,
    ListingComponent,
    ItemComponent,
    ProductDetailsComponent,
  ],

  imports: [
    RouterModule.forChild([
      {
        path: '',
        children: [
          { path: 'listing', component: ListingComponent },
          { path: 'add', component: AddProductComponent },

          { path: 'details/:id', component: ProductDetailsComponent },

          { path: 'edit/:id', component: AddProductComponent },
        ],
      },
    ]),

    FormsModule,
    CommonModule,
  ],
  exports: [],
})
export class ProductModule {}
