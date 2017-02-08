import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {
  @Input() code: number = 0;
  @Input() side: string = "left";
  @Input() width: number = 4;
  @Input() height: number = 4;

  constructor() { }

  ngOnInit() {

  }

}
