import { ProductModule } from './product/product.module';
import { HomeComponent } from './layout/home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { Component, NgModule, OnInit } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  {path:'' , component :HomeComponent},
  {path:'home' , redirectTo:'',pathMatch:'full'},
  {path :'product', loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule)}, 
  {path:'**', component : NotFoundComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes , {preloadingStrategy:PreloadAllModules , scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
