import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {
	@Input() left: boolean=true;

  constructor() { }

  ngOnInit() {
  }

}
