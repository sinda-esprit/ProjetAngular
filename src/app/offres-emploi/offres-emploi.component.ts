import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/emploi';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {
[x: string]: any;
  nb : number=0;
  test : boolean=true;
 textsearch : string='';
  listemploi !: Emploi[];
  constructor() { }

  ngOnInit(): void {
    this.listemploi=[
      {reference:'AAA',titre:'mojrem',entreprise:'lafayette',etat:true},
      {reference:'BBB',titre:'bhim',entreprise:'lafayette',etat:false},
      {reference:'CCC',titre:'hayawen',entreprise:'yellow',etat:true}

     
    ]

  }
  bilan()
  {
    this.nb=0;
    this.test=true;
    this.listemploi.map((x,i)=>
      {
      x.etat&&this.nb++
      return this.nb ;   
      
      })
  }


  search()
  {
   this.listemploi= this.listemploi.filter((x)=>
   { return x.entreprise.match(this.textsearch)})
  }
  

}
