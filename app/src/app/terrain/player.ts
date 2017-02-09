import { Team }  from './team';

export const enum Postes {
    OUT, ONE, TWO, THREE, FOUR, FIVE, SIX
}


export class Player {
	team: Team;
	poste: Postes;
	name: string;
	num: number;

	constructor(team: Team, poste: Postes, num: number, name: string) {
		this.team=team;
		this.poste=poste;
		this.num=num;
		this.name=name;
	}

}
