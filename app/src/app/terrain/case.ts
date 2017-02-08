export const enum Sides {
    LEFT, RIGHT
}
export const enum Zones {
	LEFT, RIGHT, TOP, BOTTOM, ZONE1, ZONE2, ZONE3, ZONE4, ZONE5, ZONE6
}
export class Case {
	index:number;
	side: Sides;
	zone: Zones;
	border_up: boolean;
	border_down: boolean;
	border_left: boolean;
	border_right: boolean;
	selected: boolean;

	constructor(index:number, side:Sides, zone: Zones, bup: boolean, bdown: boolean, bleft: boolean, bright: boolean) {
		this.index=index;
		this.side=side;
		this.zone=zone;
		this.border_up=bup;
		this.border_down=bdown;
		this.border_left=bleft;
		this.border_right=bright;
		this.selected=false;

	}
}
