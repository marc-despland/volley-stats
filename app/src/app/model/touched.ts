import { Case, Sides, Zones }  from './case';
import { Player }  from './player';

export const enum TouchedType {
    GROUND, PLAYER, FAULT, NET, SERVICE, WALL
}


export class Touched {
	case: Case | null;
	player: Player | null;
	type: TouchedType;

	constructor(type: TouchedType) {
		this.type=type;
		this.case=null;
		this.player=null;
	}
}
