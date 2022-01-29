function drawCircle(ctx, x, y, radius, fill, stroke, strokeWidth) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    if (fill) {
        ctx.fillStyle = fill;
        ctx.fill();
    }
    if (stroke) {
        ctx.lineWidth = strokeWidth;
        ctx.strokeStyle = stroke;
        ctx.stroke();
    }
}
export default class Stars {
    constructor(amount, starSize) {
        this.amount = amount;
        this.starSize = starSize;
        this.positions = [];
        for (let s = 0; s < this.amount; s++) {
            let x = Math.floor(Math.random() * 800);
            let y = Math.floor(Math.random() * 600);
            this.positions.push([x, y]);
        }
    }
    moveStars(speedx, speedy) {
        for (let p = 0; p < this.positions.length; p++) {
            const position = this.positions[p];
            position[0] += speedx;
            if (position[0] < 0 - this.starSize)
                position[0] = 800;
            if (position[0] > 800 + this.starSize)
                position[0] = 0 - this.starSize;
            position[1] += speedy;
            if (position[1] < 0 - this.starSize)
                position[1] = 600;
            if (position[1] > 600 + this.starSize)
                position[1] = 0 - this.starSize;
        }
    }
    render(ctx) {
        // TODO: make a circle
        for (let p = 0; p < this.positions.length; p++) {
            const position = this.positions[p];
            // ctx.fillRect(position[0], position[1], this.starSize, this.starSize);
            drawCircle(ctx, position[0], position[1], this.starSize, "white", "white", 0);
        }
    }
}
//# sourceMappingURL=Stars.js.map