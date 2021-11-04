import { payment } from './../_models/payment.model';
import { category } from './../_models/category.model';
import { Product } from './../_models/product.models';
  import { EventEmitter } from "@angular/core";


  export class productService {

   public products : Product[]=[
    {id:1,
    basicData:[
      {
        id:1,
        name:'camera',
        description:'this is camera',
        language:[{id:1,name:'english'}],
      },
    ],
    category:{id:1,categoryName:'arts'},
     paymentTypeMethod:[{id:1,name:'visa'}],
     Tags:[{id:1, name:'nike'}],
     price:100, 
     discount:50,
    imgUrls:['assets/img/canon.jpg'],
    relatedProductsIds:[2,5,8,8]
  },

  {id:2,
    basicData:[
      {
        id:2,
        name:'camerA2',
        description:'this is camera',
        language:[{id:1,name:'french'}],
      },
    ],
    category:{id:2,categoryName:'arts'},
     paymentTypeMethod:[{id:2,name:'visa'}],
     Tags:[{id:2, name:'nike'}],
     price:100, 
     discount:50,
    imgUrls:['assets/img/canon.jpg'],
    relatedProductsIds:[3,2,5,44]
  },


 {id:3,
  basicData:[
    {
      id:3,
      name:'scanner',
      description:'this is scab',
      language:[{id:3,name:'english'}],
    },
  ],
  category:{id:3,categoryName:'arts'},
   paymentTypeMethod:[{id:3,name:'visa'}],
   Tags:[{id:3, name:'nike'}],
   price:100, 
   discount:50,
  imgUrls:['assets/img/canon.jpg'],
  relatedProductsIds:[7,8,9,4]

},
{id:5,
  basicData:[
    {
      id:5,
      name:'printer',
      description:'this is print',
      language:[{id:1,name:'english'}],
    },
  ],
  category:{id:5,categoryName:'arts'},
   paymentTypeMethod:[{id:5,name:'visa'}],
   Tags:[{id:5, name:'nike'}],
   price:100, 
   discount:50,
  imgUrls:['assets/img/canon.jpg'],
  relatedProductsIds:[3,5,4,1]
},

{id:6,
  basicData:[
    {
      id:6,
      name:'smartwatch',
      description:'this is watch',
      language:[{id:3,name:'english'}],
    },
  ],
  category:{id:6,categoryName:'arts'},
   paymentTypeMethod:[{id:6,name:'visa'}],
   Tags:[{id:6, name:'nike'}],
   price:100, 
   discount:50,
  imgUrls:['assets/img/canon.jpg'],
  relatedProductsIds:[5,8,9,8]
},
{id:7,
  basicData:[
    {
      id:7,
      name:'airpods',
      description:'this is lab',
      language:[{id:7,name:'english'}],
    },
  ],
  category:{id:7,categoryName:'arts'},
   paymentTypeMethod:[{id:7,name:'visa'}],
   Tags:[{id:7, name:'nike'}],
   price:100, 
   discount:50,
  imgUrls:['assets/img/canon.jpg'],
  relatedProductsIds:[1,2,2,5]
},
{id:8,
  basicData:[
    {
      id:8,
      name:'tablet',
      description:'this is tab',
      language:[{id:7,name:'english'}],
    },
  ],
  category:{id:8,categoryName:'arts'},
   paymentTypeMethod:[{id:8,name:'mastercard'}],
   Tags:[{id:8, name:'nike'}],
   price:100, 
   discount:50,
  imgUrls:['assets/img/canon.jpg'],
  relatedProductsIds:[1,7,8,7]
},

];   
 
  

public itemAdded = new EventEmitter<Product>();
public deletItem = new EventEmitter<Product>();
  

 getAllProducts(): Product[]{
  
  return [...this.products];

  }

getProductById(id:number):Product | undefined {
return this.products.find((product)=>product.id == id)}


addProduct(product:Product):Product[]{
  this.products.push(product);
  return [...this.products];

}


updateProduct(product:Product):Product[]{
const index = this.products.findIndex((p)=>p.id=== product.id);
this.products[index]=product;
return[...this.products];
}

deletProduct(product:Product) :Product[]{
  const index = this.products.findIndex((p)=>p.id=== product.id);
  this.products.splice(index,1);
return[...this.products]
}

}
