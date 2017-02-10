import { Player, Postes }  from './player';

export class Team {
	players: Array<Player>;
	name: string;
	postes: Array<Player>;

	constructor(name: string) {
		this.name=name;
		this.players=new Array<Player>();
		this.players.push(new Player(this, Postes.ONE, 1, "Player 1"));
		this.players.push(new Player(this, Postes.TWO, 2, "Player 2"));
		this.players.push(new Player(this, Postes.THREE, 3, "Player 3"));
		this.players.push(new Player(this, Postes.FOUR, 4, "Player 4"));
		this.players.push(new Player(this, Postes.FIVE, 5, "Player 5"));
		this.players.push(new Player(this, Postes.SIX, 6, "Player 6"));
		this.postes=new Array<Player>();
		for (let i=0; i<6;i++) {
			this.postes.push(this.players[i]);
		}
	}
}
