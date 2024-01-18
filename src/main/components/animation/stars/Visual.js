import { Stars } from "./Stars.js";

// 배경

export class Visual {
  constructor() {
    this.body = document.querySelector("body");
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.body.appendChild(this.canvas);

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    window.addEventListener("resize", this.resize.bind(this));

    this.resize();
    this.show = new Stars(this.stageWidth, this.stageHeight, 500);
    this.animate();
  }
  resize() {
    this.stageWidth = window.innerWidth;
    this.stageHeight = window.innerHeight;
    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.canvas.style.width = this.stageWidth + "px";
    this.canvas.style.height = this.stageHeight + "px";
    this.show = new Stars(this.stageWidth, this.stageHeight, 500);
    this.ctx.scale(this.pixelRatio, this.pixelRatio);
  }
  animate() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.show.animate(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }
}
