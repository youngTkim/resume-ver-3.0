import styled from "styled-components";

import { ScrollAnimationContainer } from "../../features/ScrollAnimationContainer";

const MainThirdWrapper = styled.div`
  display: flex;
`;

const MainThirdInner = styled.div`
  display: flex;
  width: 100%;
  min-height: 200vh;
  padding: 2rem 9vw 2rem 9vw;
  border: 1px solid red;
`;

const MainThirdGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(11, 1fr);
  column-gap: 1rem;
  row-gap: 0.5rem;
  width: 100%;
  height: 100%;
`;

const GridElementContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  background-color: #24263c;
  border-radius: 0.5rem;

  grid-column: ${(props) => {
    return `${props.start_x}/${props.end_x}`;
  }};
  grid-row: ${(props) => {
    return `${props.start_y}/${props.end_y}`;
  }};

  .wide_image_container {
    background-color: #cccccc;
    width: 100%;
    min-height: 75%;
  }
  .wide_name_container {
    width: 100%;
    min-height: 25%;
  }
  .narrow_image_container {
    background-color: #cccccc;
    width: 100%;
    min-height: 70%;
  }
  .narrow_name_container {
    width: 100%;
    min-height: 30%;
  }
`;

const GridElementInner = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  border-radius: 0.5rem;
  overflow: hidden;
`;

function MainThird() {
  const arr = [
    [1, 1, 2],
    [1, 1, 2],
    [1, 1, 2],
    [1, 1, 2],
    [3, 3, 2],
    [3, 3, 2],
    [3, 3, 4],
    [3, 3, 4],
    [5, 5, 4],
    [5, 5, 4],
    [5, 5, 4],
    [5, 5, 4],
  ];
  return (
    <MainThirdWrapper>
      <MainThirdInner>
        <MainThirdGrid>
          <GridElementContainer
            className="first"
            direction="column"
            start_x="1"
            end_x="3"
            start_y="1"
            end_y="4"
          >
            <GridElementInner>
              <div className="wide_image_container"></div>
              <div className="wide_name_container"></div>
            </GridElementInner>
          </GridElementContainer>
          <GridElementContainer
            className="second"
            direction="column"
            start_x="3"
            end_x="4"
            start_y="1"
            end_y="6"
          >
            <div className="narrow_image_container"></div>
            <div className="narrow_name_container"></div>
          </GridElementContainer>
          <GridElementContainer
            className="third"
            direction="column"
            start_x="1"
            end_x="3"
            start_y="4"
            end_y="8"
          >
            <div className="wide_image_container"></div>
            <div className="wide_name_container"></div>
          </GridElementContainer>
          <GridElementContainer
            className="fourth"
            direction="column"
            start_x="3"
            end_x="4"
            start_y="6"
            end_y="12"
          >
            <div className="narrow_image_container"></div>
            <div className="narrow_name_container"></div>
          </GridElementContainer>
          <GridElementContainer
            className="fifth"
            direction="column"
            start_x="1"
            end_x="3"
            start_y="8"
            end_y="12"
          >
            <div className="wide_image_container"></div>
            <div className="wide_name_container"></div>
          </GridElementContainer>
        </MainThirdGrid>
      </MainThirdInner>
    </MainThirdWrapper>
  );
}

export default MainThird;
