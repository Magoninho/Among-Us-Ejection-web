export default class Astronaut {
    constructor(image, startingAngle, startingx) {
        this.angle = 0;
        this.y = 300;
        this.speedx = 10;
        this.image = image;
        this.angle = startingAngle;
        this.x = startingx;
        this.impostor = true; // random boolean
    }
    move() {
        this.x += this.speedx;
        this.speedx -= 0.035;
        if (this.speedx < 0) {
            this.speedx = 0;
        }
    }
    animation() {
        this.move();
        this.angle -= 2 * Math.PI / 180;
        // TODO: rotation
    }
    render(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.drawImage(this.image, -75, -75, 150, 150);
        ctx.restore();
    }
    isImpostor() {
        return this.impostor;
    }
}
//# sourceMappingURL=Astronaut.js.map