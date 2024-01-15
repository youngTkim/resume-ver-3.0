import styled from "styled-components";

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

const Title = styled.span`
  color: white;
  font-size: 8rem;
  font-weight: bold;
  letter-spacing: 0.05rem;
`;

const Subtitle = styled.span`
  color: #cccccc;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: -0.025rem;
`;

function MainFirst() {
  return (
    <MainFirstContainer>
      <MainFirstInner>
        <Title>{`YoungTeck`}</Title>
        <Subtitle>{`Frontend devloper & Web Enginner, youngteck kim`}</Subtitle>
      </MainFirstInner>
    </MainFirstContainer>
  );
}

export default MainFirst;
