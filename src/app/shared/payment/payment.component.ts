import { Component, OnInit } from '@angular/core';
import { payment } from 'src/app/_models/payment.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
paymentTypeMethod:payment[];
  constructor() { 
this.paymentTypeMethod = [
  {id:1 , name :'Cheque Payment'},
  {id:2 , name :'Paypal'},
  {id:3 , name :'Visa'},
  {id:5 , name :'Mastercard'},
  {id:6 , name :'Mastercard'},
  {id:7, name :'On Dilivery'},
  {id:8, name :'Meza'},
]

  }

  ngOnInit(): void {
  }

}
