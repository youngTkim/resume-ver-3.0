import styled from "styled-components";
import { useRef, useEffect } from "react";
import WebFont from "webfontloader";
import { Visual } from "./Visual.js";

const TerminalWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  padding: none;
  canvas {
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
  }
`;

function Scratch() {
  const canvasRef = useRef(null);
  class StringText {
    constructor() {
      this.canvas = canvasRef.current;
      this.ctx = this.canvas.getContext("2d");
      this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

      WebFont.load({
        google: {
          families: ["Hind:700"],
        },
        fontactive: () => {
          this.visual = new Visual();

          window.addEventListener("resize", this.resize.bind(this));
          this.resize();

          requestAnimationFrame(this.animate.bind(this));
        },
      });
    }
    resize() {
      this.stageWidth = window.innerWidth;
      this.stageHeight = window.innerHeight;

      this.canvas.width = this.stageWidth * this.pixelRatio;
      this.canvas.height = this.stageHeight * this.pixelRatio;
      this.canvas.style.width = this.stageWidth + "px";
      this.canvas.style.height = this.stageHeight + "px";

      this.ctx.scale(this.pixelRatio, this.pixelRatio);

      this.ctx.lineCap = "round";
      this.ctx.lineWidth = 4;

      this.visual.show(this.stageWidth, this.stageHeight);
    }

    animate() {
      requestAnimationFrame(this.animate.bind(this));

      this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

      this.visual.animate(this.ctx);
    }
  }
  useEffect(() => {
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;

    new StringText();
  }, []);
  return (
    <TerminalWrapper>
      <canvas ref={canvasRef}></canvas>
    </TerminalWrapper>
  );
}

export default Scratch;
