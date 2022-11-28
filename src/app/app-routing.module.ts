import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormproductComponent } from './formproduct/formproduct.component';
import { NotfounfComponent } from './notfounf/notfounf.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponentComponent } from './products-component/products-component.component';

const routes: Routes = [
  {path:'',redirectTo:'product',pathMatch:'full'},
{path:'product',component:ProductsComponentComponent},
{path:'offre',component:OffresEmploiComponent},
{path:'product/:id' ,component:ProductDetailComponent},
{path:'form' ,component:FormproductComponent},         
{path:'**', component:NotfounfComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
