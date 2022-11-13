import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/emploi';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {
  listemploi = Emploi[];
  constructor() { }

  ngOnInit(): void {
    this.listemploi=[
     
    ]

  }

}
