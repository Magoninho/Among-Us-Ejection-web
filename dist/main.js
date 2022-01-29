import Stars from "./stars.js";
let canvas = document.getElementById("game-canvas");
let ctx = canvas.getContext("2d");
let stars = new Stars(55, 1);
let bigstars = new Stars(50, 2);
let gameloop = setInterval(() => {
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 800, 600);
    stars.moveStars(1, 0);
    stars.render(ctx);
    bigstars.moveStars(1, 0);
    bigstars.render(ctx);
}, 1000 / 30);
//# sourceMappingURL=main.js.map