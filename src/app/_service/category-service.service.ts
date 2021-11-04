import { Injectable } from '@angular/core';
import { category } from '../_models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  categoryList: category[]=[
    { categoryName: "Arts & Crafts" },
    { categoryName: "Automotive" },
    { categoryName: "Baby" },
    { categoryName: "Books" },
    { categoryName: "Eletronics" },
    { categoryName: "Women's Fashion" },
    { categoryName: "Men's Fashion" },
    { categoryName: "Health & Household" },
    { categoryName: "Home & Kitchen" },
    { categoryName: "Military Accessories" },
    { categoryName: "Movies & Television" },
    { categoryName: "Sports & Outdoors" },
    { categoryName: "Tools & Home Improvement" },
    { categoryName: "Toys & Games" }
  ];
  

  constructor() { }

  getAllCategories():category[]{
    return [...this.categoryList];
  }
  getCategoryById(id:number):category | undefined{
    const cat=this.categoryList.find((c)=>c.id===id);
    return cat;
  }
}



