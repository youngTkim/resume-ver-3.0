import styled from "styled-components";
import "./App.css";
import "./global.css";

import Background from "./Background";
import Header from "./Header";
import Main from "./main/Main";

const AppWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 200vh;
  flex-direction: column;
  overflow-x: clip;
  background-color: #24262b;
`;

const Cursor = styled.div`
  position: absolute;
  display: block;
  z-index: 1001;
  width: 20px;
  height: 20px;
  border: 0.1rem solid #6ec1e4;
  border-radius: 50%;
  background-color: transparent;
  pointer-events: none; /* 커서가 다른 요소에 영향을 미치지 않도록 설정 */
  transform: translate(-50%, -50%); /* 커서 중심으로 위치 조정 */
`;

const CursorInner = styled.div`
  position: absolute;
  z-index: 1002;
  width: 5px;
  height: 5px;
  background-color: #6ec1e4;
  border-radius: 50%;
  pointer-events: none; /* 커서가 다른 요소에 영향을 미치지 않도록 설정 */
  transform: translate(-50%, -50%); /* 커서 중심으로 위치 조정 */
  transition: 0.2s ease;
  &.touched {
    width: 15px;
    height: 15px;
  }
`;

function App() {
  const handleMouseMove = (e) => {
    const cursor = document.getElementById("cursor"); // 커서 요소 가져오기
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
    // const cursor_inner = document.getElementById("cursor_inner");
    // cursor_inner.style.left = e.pageX + "px";
    // cursor_inner.style.top = e.pageY + "px";
  };

  return (
    <AppWrapper onMouseMove={handleMouseMove}>
      <Background />
      <Cursor id="cursor" />
      {/* <CursorInner id="cursor_inner" /> */}
      <Header />
      <Main />
    </AppWrapper>
  );
}

export default App;
