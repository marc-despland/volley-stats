import { Component, OnInit } from '@angular/core';
import { Case, Sides, Zones }  from './case';

@Component({
  selector: 'terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css']
})
export class TerrainComponent implements OnInit {
  cases: Array<Case>= new Array<Case>();
  previous:number = -1;
  constructor() {
  	console.log("Constructor");
  	for (var j: number=0; j<10; j++) {
  		for (var i: number=0; i<20; i++) {
  		
  			var side:Sides=Sides.LEFT;
  			var zone:Zones;
  			var bup: boolean=false;
  			var bdown: boolean= false;
  			var bleft: boolean= false
  			var bright: boolean=false;
  			if (i>9) side=Sides.RIGHT;
  			switch(j) {
  				case 0:
  				case 1:
  					zone=Zones.TOP;
  					break;
  				case 2:
  				case 3:
  					if ((i>3) && (i<8)) zone=Zones.ZONE3;
  					if ((i>7) && (i<10)) zone=Zones.ZONE4;
  					if ((i>9) && (i<12)) zone=Zones.ZONE6;
  					if ((i>11) && (i<16)) zone=Zones.ZONE1;
  				case 4: 
  				case 5:
  					if ((i>3) && (i<8)) zone=Zones.ZONE2;
  					if ((i>7) && (i<10)) zone=Zones.ZONE5;
  					if ((i>9) && (i<12)) zone=Zones.ZONE5;
  					if ((i>11) && (i<16)) zone=Zones.ZONE2;
  				case 6:
  				case 7:
  					if ((i>3) && (i<8)) zone=Zones.ZONE1;
  					if ((i>7) && (i<10)) zone=Zones.ZONE6;
  					if ((i>9) && (i<12)) zone=Zones.ZONE4;
  					if ((i>11) && (i<16)) zone=Zones.ZONE3;
  					if (i<4) zone=Zones.LEFT;
  					if (i>15) zone=Zones.RIGHT;
  					break;
  				case 8:
  				case 9:
  					zone=Zones.BOTTOM;
  					break;
  			}
  			if ((j==1) && (i>3) && (i<16)) bdown=true;
  			if ((j==7) && (i>3) && (i<16)) bdown=true;
  			if ((i==4) && (j>1) && (j<8)) bleft=true;
  			if ((i==8) && (j>1) && (j<8)) bleft=true;
  			if ((i==10) && (j>1) && (j<8)) bleft=true;
  			if ((i==12) && (j>1) && (j<8)) bleft=true;
  			if ((i==16) && (j>1) && (j<8)) bleft=true;
  			this.cases.push(new Case((j*20)+i,side, zone, bup, bdown, bleft, bright));
  		}
  		
  	}
  }
  ngOnInit() {
  }


  touched(c:Case) {
  	if (this.previous >=0) {
  		this.cases[this.previous].selected=false;
  	}
  	this.previous=c.index;

  }
}
