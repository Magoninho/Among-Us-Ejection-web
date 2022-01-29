export default class Astronaut {
    constructor(image, angle, starting_x) {
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
//# sourceMappingURL=astronauts.js.map