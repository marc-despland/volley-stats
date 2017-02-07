import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cellule',
  templateUrl: './cellule.component.html',
  styleUrls: ['./cellule.component.css']
})
export class CelluleComponent implements OnInit {
	mytext: string;
  constructor() { 
  	this.mytext="###";
  }

  ngOnInit() {
  }

  clickit(event) {
  	console.log('Click It');
  	this.mytext="@@@";

  }

}
