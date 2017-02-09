import { Case, Sides, Zones }  from './case';
import { Player }  from './player';
import { Touched, TouchedType }  from './touched';
import { Action }  from './action';
import { Point }  from './point';
import { Team }  from './team';

export class Set {
	teamleft: Team;
	teamright: Team;
	scoreleft: number;
	scoreright: number;
	points:Array<Point>;
	point: Point | null;
	first: Team;
	teamService: Team;

	constructor(left: Team, right: Team, first: Team) {
		this.teamleft=left;
		this.teamright=right;
		this.scoreleft=0;
		this.scoreright=0;
		this.points=new Array<Point>();
		this.point=null;
		this.first=first;
		this.teamService=first;
	}

	add(touch: Touched) {
		if (this.point.add(touch)) {
			this.teamService=this.point.win;
			this.points.push(this.point);
			if (this.point.win===this.teamleft) {
				this.scoreleft++;
			} else {
				this.scoreright++;
			}
			let team:Team=this.point.win;
			this.point=new Point(this,team);
		}
	}

	service() {
		this.point=new Point(this,this.teamService);
	}

	side(team : Team):Sides {
		if (this.teamleft === team) {
			return Sides.LEFT;
		} else {
			return Sides.RIGHT;
		}
	}

	opponent(team:Team):Team {
		if (team===this.teamleft) {
			return this.teamright;
		} else {
			return this.teamleft;
		}
	}


}
