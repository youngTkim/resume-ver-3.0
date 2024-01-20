import { useEffect, useRef } from "react";
import { Stars } from "./main/components/animation/stars/Stars";
import styled from "styled-components";

const BackgroundWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 600vh;
`;

function Background() {
  const canvasRef = useRef(null);

  class Visual {
    constructor() {
      this.canvas = canvasRef.current;
      this.ctx = this.canvas.getContext("2d");
      this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

      window.addEventListener("resize", this.resize.bind(this));

      this.resize();
      this.show = new Stars(this.stageWidth, this.stageHeight, 500);
      this.animate();
    }
    resize() {
      this.stageWidth = this.canvas.clientWidth;
      this.stageHeight = this.canvas.clientHeight;
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
  useEffect(() => {
    new Visual();
  }, []);
  return (
    <BackgroundWrapper>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </BackgroundWrapper>
  );
}

export default Background;
