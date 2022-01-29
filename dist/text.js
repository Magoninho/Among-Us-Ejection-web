export default class ImpostorText {
    constructor(name, astronaut) {
        this.final = "";
        this.complete = false;
        this.charIndex = 0;
        this.counter = -30.0;
        this.text = astronaut.isImpostor() ? `${name} was The Impostor` : `${name} was not The Impostor`;
    }
    render(ctx) {
        ctx.font = '20px sans';
        if (this.counter >= 1 && !this.complete) {
            this.final += this.text[this.charIndex];
            this.counter = 0;
            this.charIndex++;
            if (this.final.length == this.text.length) {
                this.complete = true;
                if ()
                    ;
            }
        }
        if (!this.complete)
            this.counter += 0.35;
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(this.final, 400, 300);
    }
    isComplete() {
        return this.complete;
    }
}
//# sourceMappingURL=text.js.map