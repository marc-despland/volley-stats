import { Case, Sides, Zones }  from './case';
import { Player }  from './player';
import { Touched, TouchedType }  from './touched';
import { Action }  from './action';
import { Team }  from './team';
import { Set }  from './set';


export class Point {
	actions: Array<Action>;
	service: Team;
	action: Action|null;
	last: Team;
	win: Team | null;
	set: Set;

	constructor(set: Set,service: Team ) {
		this.set=set;
		this.service= service;
		this.actions=new Array<Action>();
		let first: Touched=new Touched(TouchedType.SERVICE);
		first.player=service.postes[0];
		this.action=new Action(service, first);
		this.actions.push(this.action);
		this.last=service;
		this.win=null;
	}

	add(touch: Touched):boolean {
		let finish:boolean=false;
		switch(touch.type) {
			case TouchedType.PLAYER: 
				if (touch.player.team===this.last) {
					this.action.add(touch);
				} else {
					this.actions.push(this.action);
					this.last=touch.player.team;
					this.action=new Action(this.last, touch);
				}
				break;
			case TouchedType.GROUND:
				if (touch.case.out()) {
					//last team loose
					this.action.add(touch);
					this.actions.push(this.action);
					finish=true;
					this.win=this.set.opponent(this.last);
				} else {
					if (touch.case.side===this.set.side(this.last)) {
						//last loose
						this.action.add(touch);
						this.actions.push(this.action);
						finish=true;
						this.win=this.set.opponent(this.last);
					} else {
						//last win
						this.actions.push(this.action);
						this.action=new Action(this.set.opponent(this.last), touch);
						this.actions.push(this.action);
						finish=true;
						this.win=this.last;
					}
				}
				break;
			case TouchedType.WALL:
			case TouchedType.NET: 
				//last loose
				this.action.add(touch);
				this.actions.push(this.action);
				finish=true;
				this.win=this.set.opponent(this.last);
				break;
			case TouchedType.FAULT:
				//team of player loose
				if (touch.player.team===this.last) {
					//last loose
					this.action.add(touch);
					this.actions.push(this.action);
					finish=true;
					this.win=this.set.opponent(this.last);
				} else {
					this.actions.push(this.action);
					this.action=new Action(this.set.opponent(this.last), touch);
					this.actions.push(this.action);
					finish=true;
					this.win=this.last;
				}
				break;
		}
		return finish;
	}
}
