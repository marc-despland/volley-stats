import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'out',
  templateUrl: './out.component.html',
  styleUrls: ['./out.component.css']
})
export class OutComponent implements OnInit {
  @Input() position: string="top";

  constructor() { }

  ngOnInit() {
  }

}
