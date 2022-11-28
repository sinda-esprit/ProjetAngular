import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SindaComponent } from './sinda/sinda.component';
import { FooterComponent } from './footer/footer.component';
import { NavigateurComponent } from './navigateur/navigateur.component';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { FormproductComponent } from './formproduct/formproduct.component';
import { NotfounfComponent } from './notfounf/notfounf.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SindaComponent,
    FooterComponent,
    NavigateurComponent,
    ProductsComponentComponent,
    OffresEmploiComponent,
    FormproductComponent,
    NotfounfComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
