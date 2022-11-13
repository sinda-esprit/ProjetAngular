import { Component, OnInit } from '@angular/core';
import { Product } from '../core/product';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.css']
})
export class ProductsComponentComponent implements OnInit {
  title:string='aaslema ya hmema';
  productList!: Product[];
  constructor() { }

  ngOnInit(): void {

    this.productList=[
      {id: 1, title: "T-shirt 1", price: 18, quantity: 3 , like: 0,picture:'https://img.freepik.com/photos-gratuite/t-shirts-blancs-espace-copie-fond-gris_53876-104920.jpg?w=2000'},
      {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0,picture :'https://static.bershka.net/4/photos2/2022/I/0/2/p/2766/777/800//01/2766777800_2_4_3.jpg?t=1660741431395'},
      {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0,picture : 'https://media.gq.com/photos/5ca7ad6d1656fe4e4c2710d7/master/w_1280%2Cc_limit/GQ-Best-Stuff-T'} ]
  }
  

  buy(id:number)
  {
  for (let i in this.productList)
  {if (this.productList[i].id == id)
  this.productList[i].quantity--;
  }}

  likee(id:number)
  {
  for (let i in this.productList)
  {if (this.productList[i].id == id)
  this.productList[i].like++;
  }

  }
}
