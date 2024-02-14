import styled from "styled-components";

import { ScrollAnimationContainer } from "../../features/ScrollAnimationContainer";

import StackOverflow from "../../assets/StackOverflow.png";
import OurPayment from "../../assets/OurPayment.png";
import AppleMockUp from "../../assets/AppleMockUp.png";
import SocketChat from "../../assets/SocketChat.png";
import DingoMockUpFull from "../../assets/DingoMockUpFull.png";
import { useEffect } from "react";
import { useState } from "react";

const TitleContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10vh;
`;
const Title = styled.span`
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 6rem;
  font-weight: 700;
`;

const MainThirdWrapper = styled.div`
  display: flex;
  margin-bottom: 10vh;
`;

const MainThirdInner = styled.div`
  display: flex;
  width: 100%;
  min-height: 220vh;
  padding: 2rem 9vw 2rem 9vw;
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
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;

  grid-column: ${(props) => {
    return `${props.start_x}/${props.end_x}`;
  }};
  grid-row: ${(props) => {
    return `${props.start_y}/${props.end_y}`;
  }};

  .wide_image_container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #cccccc;
    width: 100%;
    min-height: 75%;
    overflow: hidden;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      transition: 0.3s ease;
      cursor: pointer;
    }
  }
  &:hover .wide_image_container img {
    transform: scale(1.04);
  }
  .wide_name_container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #24263c;
    padding: 0rem 2rem 0rem 2rem;
    width: 100%;
    min-height: 25%;
    .name {
      top: 1rem;
      color: white;
      position: absolute;
      font-family: "Poppins", sans-serif;
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 0.3rem;
    }
    .classfied {
      top: 3.3rem;
      color: #888888;
      position: absolute;
      font-family: "Poppins", sans-serif;
      font-size: 1rem;
      font-weight: 500;
      transition: 0.3s ease;
    }
    .route {
      top: 3.3rem;
      color: #888888;
      position: absolute;
      font-family: "Poppins", sans-serif;
      font-size: 1rem;
      font-weight: 500;
      transition: 0.3s ease;
      transform: translateY(100%);
      opacity: 0;
    }
  }
  &:hover .wide_name_container .classfied {
    transform: translateY(-100%);
    opacity: 0;
  }
  &:hover .wide_name_container .route {
    transform: translateY(0%);
    opacity: 1;
  }
  .narrow_image_container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #cccccc;
    width: 100%;
    min-height: 70%;
    overflow: hidden;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
    img {
      width: 101%;
      height: 100%;
      transition: 0.3s ease;
    }
  }

  &:hover .narrow_image_container img {
    transform: scale(1.04);
  }
  .narrow_name_container {
    position: relative;
    display: flex;
    padding: 0rem 2rem 0rem 2rem;
    flex-direction: center;
    background-color: #24263c;
    width: 100%;
    min-height: 30%;
    .name {
      top: 1rem;
      color: white;
      position: absolute;
      font-family: "Poppins", sans-serif;
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 0.3rem;
    }
    .name_personnel {
      top: 3.3rem;
      color: white;
      position: absolute;
      font-family: "Poppins", sans-serif;
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 0.3rem;
    }
    .classfied {
      top: 5.6rem;
      color: #888888;
      position: absolute;
      font-family: "Poppins", sans-serif;
      font-size: 1rem;
      font-weight: 500;
      transition: 0.3s ease;
    }
    .route {
      top: 5.6rem;
      color: #888888;
      position: absolute;
      font-family: "Poppins", sans-serif;
      font-size: 1rem;
      font-weight: 500;
      transition: 0.3s ease;
      transform: translateY(100%);
      opacity: 0;
    }
  }
  &:hover .narrow_name_container .classfied {
    transform: translateY(-100%);
    opacity: 0;
  }
  &:hover .narrow_name_container .route {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const GridElementInner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  border-radius: 0.5rem;
  overflow: hidden;
`;

function MainThird() {
  const [address, setAddress] = useState({
    apple: "",
    dingo: "",
  });
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
  useEffect(() => {
    setAddress({
      apple: "http://applemockup.s3-website.ap-northeast-2.amazonaws.com",
      dingo: "http://dingomockup.s3-website.ap-northeast-2.amazonaws.com",
    });
  }, []);
  return (
    <>
      <TitleContainer id="work">
        <Title>My Work</Title>
      </TitleContainer>
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
              <ScrollAnimationContainer>
                <GridElementInner>
                  <div className="wide_image_container">
                    <img src={StackOverflow} alt="" />
                  </div>
                  <div className="wide_name_container">
                    <span className="name">
                      Stack Overflow - Personal Project
                    </span>
                    <span className="classfied">Web Development</span>
                    <span className="route">Show Project ---</span>
                  </div>
                </GridElementInner>
              </ScrollAnimationContainer>
            </GridElementContainer>
            <GridElementContainer
              className="second"
              direction="column"
              start_x="3"
              end_x="4"
              start_y="1"
              end_y="6"
            >
              <ScrollAnimationContainer>
                <GridElementInner>
                  <div className="narrow_image_container">
                    <a href="http://socketchat.store:4000">
                      <img src={SocketChat} alt="" />
                    </a>
                  </div>
                  <div className="narrow_name_container">
                    <a href="http://socketchat.store:4000">
                      <span className="name">SocketChat</span>
                      <span className="name_personnel">- Personal Project</span>
                      <span className="classfied">
                        Web, Server & DB Development
                      </span>
                      <span className="route">Show Project ---</span>
                    </a>
                  </div>
                </GridElementInner>
              </ScrollAnimationContainer>
            </GridElementContainer>
            <GridElementContainer
              className="third"
              direction="column"
              start_x="1"
              end_x="3"
              start_y="4"
              end_y="8"
            >
              <ScrollAnimationContainer>
                <GridElementInner>
                  <div className="wide_image_container">
                    <a href="http://ourmainpro-33.s3-website.ap-northeast-2.amazonaws.com">
                      <img src={OurPayment} alt="" />
                    </a>
                  </div>

                  <div className="wide_name_container">
                    <a href="http://ourmainpro-33.s3-website.ap-northeast-2.amazonaws.com">
                      <span className="name">Our Payment - Team Project</span>
                      <span className="classfied">Web Development</span>
                      <span className="route">Show Project ---</span>
                    </a>
                  </div>
                </GridElementInner>
              </ScrollAnimationContainer>
            </GridElementContainer>
            <GridElementContainer
              className="fourth"
              direction="column"
              start_x="3"
              end_x="4"
              start_y="6"
              end_y="12"
            >
              <ScrollAnimationContainer>
                <GridElementInner>
                  <div className="narrow_image_container">
                    <a href={address.dingo}>
                      <img src={DingoMockUpFull} alt="" />
                    </a>
                  </div>
                  <div className="narrow_name_container">
                    <a href={address.dingo}>
                      <span className="name">Dingo MockUp</span>
                      <span className="name_personnel">- Personal Project</span>
                      <span className="classfied">Web Development</span>
                      <span className="route">Show Project ---</span>
                    </a>
                  </div>
                </GridElementInner>
              </ScrollAnimationContainer>
            </GridElementContainer>
            <GridElementContainer
              className="fifth"
              direction="column"
              start_x="1"
              end_x="3"
              start_y="8"
              end_y="12"
            >
              <ScrollAnimationContainer>
                <GridElementInner>
                  <div className="wide_image_container">
                    <a href={address.apple}>
                      <img src={AppleMockUp} alt="" />
                    </a>
                  </div>
                  <div className="wide_name_container">
                    <a href={address.apple}>
                      <span className="name">
                        AppleMockUp - Personal Project
                      </span>
                      <span className="classfied">Web Development</span>
                      <span className="route">Show Project ---</span>
                    </a>
                  </div>
                </GridElementInner>
              </ScrollAnimationContainer>
            </GridElementContainer>
          </MainThirdGrid>
        </MainThirdInner>
      </MainThirdWrapper>
    </>
  );
}

export default MainThird;
