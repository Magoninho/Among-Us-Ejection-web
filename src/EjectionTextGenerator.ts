import Astronaut from './Astronaut.js';

export default class EjectionTextGenerator {
	private final: string = "";
	private text: string;
	private complete: boolean = false;
	private charIndex: number = 0;
	private counter: number = -30.0;
	private astronaut: Astronaut;

	constructor(name: string, astronaut: Astronaut) {
		this.astronaut = astronaut
		this.text = this.astronaut.isImpostor() ? `${name} was The Impostor` : `${name} was not The Impostor`;
	}

	public render(ctx: CanvasRenderingContext2D) {
		ctx.font = '20px sans';

		if (this.counter >= 1 && !this.complete) {
			this.final += this.text[this.charIndex];
			this.counter = 0;
			this.charIndex++;

			if (this.final.length == 1)
				(document.getElementById("vote-audio") as HTMLAudioElement).play();
				
			if (this.final.length == this.text.length) {
				this.complete = true;
				if (this.astronaut.isImpostor()) {
					(document.getElementById("impostor-audio") as HTMLAudioElement).play();
				}
			}
		}

		if (!this.complete) this.counter += 0.35;
		
		ctx.fillStyle = "white";
		ctx.textAlign = "center"; 
		ctx.fillText(this.final, 400, 300);
	}

	public isComplete() {
		return this.complete;
	}
}