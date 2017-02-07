import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
   @Input() side: string = "left";


  constructor() { }

  ngOnInit() {
  }

  test(event) {
  	console.log(this.side+ " : " +event.clientX + "   "+ event.clientY);
  }
}
