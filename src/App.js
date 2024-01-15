import styled from "styled-components";
import "./App.css";
import "./global.css";

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

function App() {
  return (
    <AppWrapper>
      <Header />
      <Main />
    </AppWrapper>
  );
}

export default App;
