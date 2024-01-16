export class Stars {
  constructor(stageWidth, stageHeight, starCount) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    this.stars = [];
    this.sizeRange = 3;

    for (let i = 0; i < starCount; i++) {
      this.stars.push(new Star((i % 3) + 1, stageWidth, stageHeight));
    }
  }
  animate(ctx) {
    for (let i = 0; i < this.stars.length; i++) {
      this.stars[i].animate(ctx);
    }
  }
}

class Star {
  constructor(size, stageWidth, stageHeight) {
    this.size = size;
    this.brightness = this.size / 3;
    this.curX = Math.random() * stageWidth;
    this.curY = Math.random() * stageHeight;
  }
  animate(ctx) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.globalAlpha = this.brightness / 2;
    ctx.arc(this.curX, this.curY, this.size * 0.7, Math.PI * 2, 0, false);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.globalAlpha = this.brightness;
    ctx.arc(this.curX, this.curY, this.size * 0.5, Math.PI * 2, 0, false);
    ctx.fill();
    ctx.closePath();
  }
}
