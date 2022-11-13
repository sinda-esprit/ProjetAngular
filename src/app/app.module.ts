import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SindaComponent } from './sinda/sinda.component';
import { FooterComponent } from './footer/footer.component';
import { NavigateurComponent } from './navigateur/navigateur.component';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';

@NgModule({
  declarations: [
    AppComponent,
    SindaComponent,
    FooterComponent,
    NavigateurComponent,
    ProductsComponentComponent,
    OffresEmploiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
