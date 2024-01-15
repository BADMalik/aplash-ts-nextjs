
function extend(a, b){
		for(var key in b) {
			if(b.hasOwnProperty(key)) {
				a[key] = b[key];
			}
		}
		return a;
	}
export class Circle {
	constructor(opts) {
		extend(this, opts);
    this.fill = undefined;
	}
	draw() {
		ctx.globalAlpha = this.opacity || 1;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
		if (this.stroke) {
			ctx.strokeStyle = this.stroke.color;
			ctx.lineWidth = this.stroke.width;
			ctx.stroke();
		}
		if (this.fill) {
			ctx.fillStyle = this.fill;
			ctx.fill();
		}
		ctx.closePath();
		ctx.globalAlpha = 1;
	}
}

