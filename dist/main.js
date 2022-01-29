var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Astronaut from "./astronauts.js";
import ImageUtils from "./ImageUtils.js";
import Stars from "./stars.js";
// TODO: add button event listener
// "main function"
function main(color) {
    return __awaiter(this, void 0, void 0, function* () {
        let canvas = document.getElementById("game-canvas");
        let ctx = canvas.getContext("2d");
        let stars = new Stars(60, 1);
        let bigstars = new Stars(50, 2);
        let astronautSprite = yield ImageUtils.loadImageFromUrl(`images/characters/${color}.png`);
        let astronaut = new Astronaut(astronautSprite, 0, -360);
        let gameloop = setInterval(() => {
            ctx.clearRect(0, 0, 800, 600);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, 800, 600);
            stars.moveStars(0.5, 0);
            stars.render(ctx);
            bigstars.moveStars(1, 0);
            bigstars.render(ctx);
            // astronaut
            astronaut.animation();
            astronaut.render(ctx);
        }, 1000 / 30);
    });
}
main("red");
//# sourceMappingURL=main.js.map