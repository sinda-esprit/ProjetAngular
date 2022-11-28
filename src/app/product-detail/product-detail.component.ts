import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id!:number;
  constructor(private v:ActivatedRoute) {
}

  ngOnInit(): void {
    this.id=this.v.snapshot.params['id'];
    console.log(this.id)
  }

}
