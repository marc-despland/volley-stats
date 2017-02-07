import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zone-defense',
  templateUrl: './zone-defense.component.html',
  styleUrls: ['./zone-defense.component.css']
})
export class ZoneDefenseComponent implements OnInit {
	@Input() code: number = 0;
  constructor() { }

  ngOnInit() {
  }

}
