export class Stars {
  constructor(stageWidth, stageHeight, starCount) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    this.stars = [];
    this.sizeRange = 3;
    this.opacityRange = [0.9, 0.3, 0.2];
    for (let i = 0; i < starCount; i++) {
      this.stars.push(
        new Star(
          i,
          (i % 3) + 1,
          this.opacityRange[i % 3],
          stageWidth,
          stageHeight
        )
      );
    }
  }
  animate(ctx) {
    for (let i = 0; i < this.stars.length; i++) {
      this.stars[i].animate(ctx);
    }
  }
}

class Star {
  constructor(index, size, opacity, stageWidth, stageHeight) {
    this.index = index;
    this.size = size;
    this.opacity = opacity;
    this.cur = 1 + index / 100;
    this.speed = 0.025;
    this.distance1 = this.size / 10;
    this.distance2 = this.size * 2;
    this.brightness = this.size / 3;
    this.curX = Math.random() * stageWidth;
    this.curY = Math.random() * stageHeight;

    this.U_X = this.curX;
    this.U_Y = this.curY - this.distance2;
    this.RU_X = this.curX + this.distance1;
    this.RU_Y = this.curY - this.distance1;
    this.R_X = this.curX + this.distance2;
    this.R_Y = this.curY;
    this.RD_X = this.curX + this.distance1;
    this.RD_Y = this.curY + this.distance1;
    this.D_X = this.curX;
    this.D_Y = this.curY + this.distance2;
    this.LD_X = this.curX - this.distance1;
    this.LD_Y = this.curY + this.distance1;
    this.L_X = this.curX - this.distance2;
    this.L_Y = this.curY;
    this.LU_X = this.curX - this.distance1;
    this.LU_Y = this.curY - this.distance1;
    this.E_X = this.curX;
    this.E_Y = this.curY - this.distance2;
  }
  animate(ctx) {
    ctx.fillStyle = "white";
    ctx.globalAlpha = this.brightness / 2;
    ctx.beginPath();
    ctx.moveTo(this.U_X, this.U_Y);
    ctx.quadraticCurveTo(this.RU_X, this.RU_Y, this.R_X, this.R_Y);
    ctx.quadraticCurveTo(this.RD_X, this.RD_Y, this.D_X, this.D_Y);
    ctx.quadraticCurveTo(this.LD_X, this.LD_Y, this.L_X, this.L_Y);
    ctx.quadraticCurveTo(this.LU_X, this.LU_Y, this.E_X, this.E_Y);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = this.brightness;
    ctx.beginPath();
    ctx.arc(this.curX, this.curY, this.size / 2, Math.PI * 2, 0, false);
    ctx.fill();
    ctx.closePath();
    this.update();
  }
  update() {
    //Update에서 변동값을 정할 것
    this.cur += this.speed;
    this.distance1 =
      this.size / 10 + ((this.size / 10) * Math.sin(this.cur)) / 10;
    this.distance2 = this.size * 2 + this.size * 2 * Math.sin(this.cur);
    this.U_X = this.curX;
    this.U_Y = this.curY - this.distance2;
    this.RU_X = this.curX + this.distance1;
    this.RU_Y = this.curY - this.distance1;
    this.R_X = this.curX + this.distance2;
    this.R_Y = this.curY;
    this.RD_X = this.curX + this.distance1;
    this.RD_Y = this.curY + this.distance1;
    this.D_X = this.curX;
    this.D_Y = this.curY + this.distance2;
    this.LD_X = this.curX - this.distance1;
    this.LD_Y = this.curY + this.distance1;
    this.L_X = this.curX - this.distance2;
    this.L_Y = this.curY;
    this.LU_X = this.curX - this.distance1;
    this.LU_Y = this.curY - this.distance1;
    this.E_X = this.curX;
    this.E_Y = this.curY - this.distance2;
  }
}
