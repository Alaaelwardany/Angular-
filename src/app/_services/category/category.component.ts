import { category } from 'src/app/_models/category.model';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories:category[] =[
    {id:1,categoryName:'Arts & Crafts'},
    {id:2,categoryName:'Automotive'},
    {id:3,categoryName:'Baby'},
    {id:4,categoryName:'Books'},
    {id:5,categoryName:'Eletronics'},
    {id:6,categoryName:'WomensFashion'},
    {id:7,categoryName:'MensFashion'},
    {id:8,categoryName:'Health & Household'},
    {id:9,categoryName:'Home & Kitchen'},
    {id:10,categoryName:'Military Accessories'},
    {id:11,categoryName:'Movies & Television'},
    {id:12,categoryName:'Sports & Outdoors'},
    {id:13,categoryName:'Tools & Home Improvement'},
    {id:14,categoryName:'Toys & Games'},

  ]
  constructor() { } 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    
 getAllCategories() : category[]{
   return [...this.categories]
 }

  getCategoryById(id:number):category | undefined{
  return this.categories.find((c)=>c.id===id)
  }

save(){}
update(){}
delete(){}


}
