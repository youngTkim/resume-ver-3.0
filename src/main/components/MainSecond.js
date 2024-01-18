import styled from "styled-components";
import AirplayIcon from "@mui/icons-material/Airplay";
import { ReactComponent as ReactIcon } from "../../assets/ReactIcon.svg";
import MoreIcon from "@mui/icons-material/More";

const MainSecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
`;
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
const ExpertiseContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Expertises = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 0.1rem solid #a3a3a3;
  width: 69vw;
  height: 23vw;
  color: white;
`;
const Expertise = styled.li`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 0.1rem solid #a3a3a3;
`;
const PartNameContainer = styled.article`
  display: flex;
  width: 100%;
  min-height: 35%;
`;
const PartLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  aspect-ratio: 1/1;
`;
const PartNames = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;
const PartName = styled.li`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
`;
const Underline = styled.span`
  background-image: linear-gradient(
    90deg,
    ${(props) => props.underline},
    ${(props) => props.underline}
  );
  background-position: 50% 80%;
  -webkit-background-size: 100% 0.4rem;
  background-size: 100% 0.4rem;
  background-repeat: no-repeat;
`;
const ExplanationContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 65%;
`;
const TagImage = styled.span`
  display: flex;
  font-family: "Roboto Mono", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  color: #666666;
`;
const Explanation = styled.article`
  flex: 1;
  display: flex;
  margin-left: 1.2rem;
  border-left: 0.13rem solid #666666;
`;

const ExplanationInner = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  font-family: "Roboto mono", sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0rem 0.3rem 0rem 0.3rem;
`;
const KR = styled.span`
  font-family: "Gowun Batang", sans-serif;
  font-weight: bold;
`;

function MainSecond() {
  return (
    <MainSecondWrapper id="main_second">
      <TitleContainer>
        <Title>My Expertise</Title>
      </TitleContainer>
      <ExpertiseContainer>
        <Expertises>
          <Expertise>
            <PartNameContainer>
              <PartLogoContainer>
                <ReactIcon
                  style={{ width: "60%", height: "60%", fill: "#ffffff" }}
                />
              </PartLogoContainer>
              <PartNames>
                <PartName>
                  <Underline underline="#ff0088">FrontEnd</Underline>
                </PartName>
                <PartName>Development</PartName>
              </PartNames>
            </PartNameContainer>
            <ExplanationContainer>
              <TagImage>{`<h3>`}</TagImage>
              <Explanation>
                <ExplanationInner>
                  {`React,axios,canvas,\nrecoil,styledComponents,\ntailwind`}
                  <KR>{`를 비롯하여 유저친화적인\n웹을 만들고 있습니다.`}</KR>
                </ExplanationInner>
              </Explanation>
              <TagImage>{`<h3>`}</TagImage>
            </ExplanationContainer>
          </Expertise>
          <Expertise>
            <PartNameContainer>
              <PartLogoContainer>
                <AirplayIcon style={{ width: "60%", height: "60%" }} />
              </PartLogoContainer>
              <PartNames>
                <PartName>
                  <Underline underline="#00b0ff">BackEnd</Underline>
                </PartName>
                <PartName>Development</PartName>
              </PartNames>
            </PartNameContainer>
            <ExplanationContainer>
              <TagImage>{`<h3>`}</TagImage>
              <Explanation>
                <ExplanationInner>{`Socket,nestJS,mongoDB,\nexpress`}</ExplanationInner>
              </Explanation>
              <TagImage>{`<h3>`}</TagImage>
            </ExplanationContainer>
          </Expertise>
          <Expertise>
            <PartNameContainer>
              <PartLogoContainer>
                <MoreIcon
                  style={{
                    width: "60%",
                    height: "60%",
                    fill: "#ffffff",
                    transform: "rotate(180deg)",
                  }}
                />
              </PartLogoContainer>
              <PartNames>
                <PartName>
                  <Underline underline="#ffc107">Etc</Underline>
                </PartName>
              </PartNames>
            </PartNameContainer>
            <ExplanationContainer>
              <TagImage>{`<h3>`}</TagImage>
              <Explanation>
                <ExplanationInner>
                  React,axios,canvas,recoil,styled-components,tailwind
                  <KR>를 비롯하여 유저친화적인 웹을 만들고 있습니다.</KR>
                </ExplanationInner>
              </Explanation>
              <TagImage>{`<h3>`}</TagImage>
            </ExplanationContainer>
          </Expertise>
        </Expertises>
      </ExpertiseContainer>
    </MainSecondWrapper>
  );
}

export default MainSecond;
