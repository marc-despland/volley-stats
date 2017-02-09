import { Team }  from './team';
import { Set }  from './set';

export class Match {
	teama:Team;
	teamb:Team;
	sets: Array<Set>;
	set: Set | null;
	scorea: number;
	scoreb: number;


	constructor(teama: string, teamb:string) {
		this.sets=new Array<Set>();
		this.teama=new Team(teama);
		this.teamb=new Team(teamb);
		this.scorea=0;
		this.scoreb=0;
		this.set=null;
	}


	toss(left: Team, service: Team) {
		if (left===this.teama) {
			this.set=new Set(this.teama, this.teamb, service);
		} else {
			this.set=new Set(this.teamb, this.teama, service);
		}
	}

	endset() {
		let set:Set=this.set;
		this.sets.push(this.set);
		if (this.set.scoreleft>this.set.scoreright) {
			if (this.set.teamleft===this.teama) {
				this.scorea++;
			} else {
				this.scoreb++;
			}
		} else {
			if (this.set.teamleft===this.teama) {
				this.scoreb++;
			} else {
				this.scorea++;
			}
		}
	}

	newset() {
		let set:Set=this.set;
		let service:Team=set.opponent(set.first);
		if (this.set.teamleft===this.teama) {
			this.set=new Set(this.teamb, this.teama, service);
		} else {
			this.set=new Set(this.teama, this.teamb, service);
		}

	}

}
