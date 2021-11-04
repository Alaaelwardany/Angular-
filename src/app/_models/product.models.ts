import { Basicdata } from './basicData.model';
import { category } from './category.model';
import { payment } from './payment.model';
import { Tags } from './tag.model';

export interface Product {
 paymentTypeMethod:payment[];
 name?: string;
  id?:number;
  basicData:Basicdata[];
  price:number;
  discount?:number;
  // payment?:payment[];
  category:category;
  Tags?:Tags[];
  imgUrls:string[];
  relatedProductsIds?:number[];
}


