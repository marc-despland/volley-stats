import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zone-attack',
  templateUrl: './zone-attack.component.html',
  styleUrls: ['./zone-attack.component.css']
})
export class ZoneAttackComponent implements OnInit {
  @Input() code: number = 0;
  constructor() { }

  ngOnInit() {
  }

}
