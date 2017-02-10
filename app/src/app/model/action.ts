import { Case, Sides, Zones }  from './case';
import { Player }  from './player';
import { Touched }  from './touched';
import { Team }  from './team';

export class Action {
	touchs: Array<Touched>;
	index: number;
	team: Team;

	constructor(team: Team, first:Touched) {
		this.touchs=new Array<Touched>();
		this.index=1;
		this.team=team;
		this.touchs.push(first);
		first.case.add(this.index);
	}

	add(touch:Touched) {
		this.index++;
		this.touchs.push(touch);
		touch.case.add(this.index);

	}
}
