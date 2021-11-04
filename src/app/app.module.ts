import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { DropDownComponent } from './shared/drop-down/drop-down.component';
import { productService } from './_services/productService.service';
import { PaymentComponent } from './shared/payment/payment.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './layout/home/home.component';
import { ProductModule } from './product/product.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropDownComponent,
    PaymentComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    ProductModule,
    FormsModule, 
   AppRoutingModule
  ],
  providers: [productService],
  bootstrap: [AppComponent]
})
export class AppModule { }
function routes(routes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

