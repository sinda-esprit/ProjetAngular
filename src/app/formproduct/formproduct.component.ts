import { Component, OnInit } from '@angular/core';
import { Product } from '../core/product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductsComponentComponent } from '../products-component/products-component.component';

@Component({
  selector: 'app-formproduct',
  templateUrl: './formproduct.component.html',
  styleUrls: ['./formproduct.component.css']
})
export class FormproductComponent implements OnInit {
product :Product=new Product();
  constructor() { }

  ngOnInit(): void {
  }
  ajouter(): void
  { console.log(this.product)}

}
