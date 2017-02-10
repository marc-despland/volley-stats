import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Case, Sides, Zones }  from '../../model/case';

@Component({
  selector: 'cellule',
  templateUrl: './cellule.component.html',
  styleUrls: ['./cellule.component.css']
})
export class CelluleComponent implements OnInit {
	@Input() case: Case;
	@Output() touched = new EventEmitter();
	selected: boolean=false;

	mytext: string;
  constructor() { 
  	this.mytext="###";
  }

  ngOnInit() {
  }

  clickit(event) {
  	console.log('Index: '+ this.case.index);
  	this.case.selected=true;
  	this.touched.emit(this.case);
  }

  out():boolean {
  	return (! this.case.selected && ((this.case.zone==Zones.BOTTOM) || (this.case.zone==Zones.TOP) || (this.case.zone==Zones.RIGHT) || (this.case.zone==Zones.LEFT)));
  }
  in():boolean {
  	return (! this.case.selected && ((this.case.zone==Zones.ZONE1) || (this.case.zone==Zones.ZONE2) || (this.case.zone==Zones.ZONE3) || (this.case.zone==Zones.ZONE4) || (this.case.zone==Zones.ZONE5) || (this.case.zone==Zones.ZONE6)));
  }


  selected_out():boolean {
  	return (this.case.selected && ((this.case.zone==Zones.BOTTOM) || (this.case.zone==Zones.TOP) || (this.case.zone==Zones.RIGHT) || (this.case.zone==Zones.LEFT)));
  }
  selected_in():boolean {
  	return (this.case.selected && ((this.case.zone==Zones.ZONE1) || (this.case.zone==Zones.ZONE2) || (this.case.zone==Zones.ZONE3) || (this.case.zone==Zones.ZONE4) || (this.case.zone==Zones.ZONE5) || (this.case.zone==Zones.ZONE6)));
  }

}
