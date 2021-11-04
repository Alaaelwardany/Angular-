import { payment } from 'src/app/_models/payment.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentTypeService {
  paymentTypeMethod : payment[] =[
    {id:1 , name :'Cheque Payment'},
    {id:2 , name :'Paypal'},
    {id:3 , name :'Visa'},
    {id:5 , name :'Mastercard'},
    {id:6 , name :'Mastercard'},
    {id:7, name :'On Dilivery'},
    {id:8, name :'Meza'},
  ]
  constructor() { }

  getAllPaymentTypes():payment[]{
    return [...this.paymentTypeMethod]
  }

  getPaymentTypeById(id:number):payment|undefined{
    return this.paymentTypeMethod.find((p)=>p.id===id)
  }

 save(){}
 update(){}
 delete(){} 
}


