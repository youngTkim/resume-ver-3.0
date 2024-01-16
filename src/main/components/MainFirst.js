import styled from "styled-components";
import Scratch from "./animation/textstring/Scratch";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const MainFirstContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
`;

const MainFirstInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const ArrowContainer = styled.span`
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  align-items: center;
  justify-content: center;
  color: white;
`;

// const Title = styled.span`
//   color: white;
//   font-size: 8rem;
//   font-weight: bold;
//   letter-spacing: 0.05rem;
// `;

const Subtitle = styled.span`
  transform: translateY(15vh);
  color: #cccccc;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: -0.025rem;
`;

function MainFirst() {
  return (
    <MainFirstContainer>
      <ArrowContainer>{/* <ArrowDownwardIcon /> */}</ArrowContainer>
      <MainFirstInner>
        <Subtitle>{`Frontend devloper & Web Enginner, youngteck kim`}</Subtitle>
      </MainFirstInner>
      <Scratch />
    </MainFirstContainer>
  );
}

export default MainFirst;
