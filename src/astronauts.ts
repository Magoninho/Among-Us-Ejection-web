export default class Astronaut {
	private image: HTMLImageElement;
	private angle: number;
	private x: number;

	constructor(image: HTMLImageElement, angle: number, starting_x: number) {
		this.image = image;
		this.angle = angle;
		this.x = starting_x;
	}

	move(speed) {
		this.x += speed;
	}

	animation() {
		this.angle += 5;
	}
}