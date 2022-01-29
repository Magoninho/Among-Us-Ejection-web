export default class Astronaut {
	private image: HTMLImageElement;
	private angle: number = 0;
	private x: number;
	private y: number = 300;
	private speedx: number = 10;
	private impostor: boolean;

	constructor(image: HTMLImageElement, startingAngle: number, startingx: number) {
		this.image = image;
		this.angle = startingAngle;
		this.x = startingx;
		this.impostor = true; // random boolean
	}

	private move() {
		this.x += this.speedx;
		this.speedx -= 0.035
		if (this.speedx < 0) {
			this.speedx = 0;
		}
	}

	public animation() {
		this.move();
		this.angle -= 2 * Math.PI / 180;

		// TODO: rotation
	}

	public render(ctx: CanvasRenderingContext2D) {
			
		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.rotate(this.angle);
		ctx.drawImage(this.image, -75, -75, 150, 150);
		ctx.restore();

	}

	public isImpostor() {
		return this.impostor;
	}
}