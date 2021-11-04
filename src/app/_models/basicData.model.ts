import {Language } from "./language.model";

 export interface Basicdata {
  id?:number;
  name:string;
  description:string;
  language:Language[];
}
