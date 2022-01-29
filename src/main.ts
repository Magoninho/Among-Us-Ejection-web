import Astronaut from "./astronauts.js";
import ImageUtils from "./ImageUtils.js";
import Stars from "./stars.js";
import EjectionTextGenerator from "./ejectionTextGenerator.js";

let btn = document.getElementById("start-button");
btn.addEventListener("click", () => {
	main(btn.innerText);
});

// "main function"
async function main(color: string) {
	(document.getElementById("ambience-audio") as HTMLAudioElement).play();
	let canvas: HTMLCanvasElement = document.getElementById("game-canvas") as HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D = canvas.getContext("2d");


	let stars = new Stars(60, 1);
	let bigstars = new Stars(50, 2);

	let astronautSprite = await ImageUtils.loadImageFromUrl(`images/characters/${color}.png`);

	let astronaut = new Astronaut(astronautSprite, 0, -360);
	let text = new EjectionTextGenerator(color, astronaut);

	let gameloop = setInterval(() => {
		ctx.clearRect(0, 0, 800, 600);

		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, 800, 600);

		// moving and rendering the stars and big stars
		stars.moveStars(0.5, 0);
		stars.render(ctx);
		bigstars.moveStars(1, 0);
		bigstars.render(ctx);

		// astronaut
		text.render(ctx);
		astronaut.animation();
		astronaut.render(ctx);

	}, 1000 / 30);
}
