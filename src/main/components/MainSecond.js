import styled from "styled-components";
import AirplayIcon from "@mui/icons-material/Airplay";
import { ReactComponent as ReactIcon } from "../../assets/ReactIcon.svg";
import MoreIcon from "@mui/icons-material/More";
import HtmlImage from "../../assets/HtmlImage.png";

const MainSecondWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  margin-bottom: 20vh;
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

const MainSecondBackground = styled.img`
  position: absolute;
  width: 45%;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.35;
`;

function MainSecond() {
  return (
    <MainSecondWrapper id="expertise">
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
                <ExplanationInner>
                  {`Socket,nestJS,mongoDB,express\n`}
                  <KR>{`를 통해 Api를 생성, DB와 연동,\n`}</KR>
                  {`AWS ec2,Route 53`}
                  <KR>{`을 통해\n`}</KR>
                  {`도메인과 연결,배포한 경험이 있습니다.`}
                </ExplanationInner>
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
                  <Underline underline="#ffc107">{`Introduction`}</Underline>
                </PartName>
              </PartNames>
            </PartNameContainer>
            <ExplanationContainer>
              <TagImage>{`<h3>`}</TagImage>
              <Explanation>
                <ExplanationInner>
                  <KR>{`문제에서 기회를 포착하고,`}</KR>
                  <KR>{`해결을 통해 성취하고, 성장하는 것을 좋아합니다.`}</KR>
                  <KR>{`일상에서 마주한 불편함으로, 더 나은 사용자 경험에 대해 고민합니다.`}</KR>
                </ExplanationInner>
              </Explanation>
              <TagImage>{`<h3>`}</TagImage>
            </ExplanationContainer>
          </Expertise>
        </Expertises>
      </ExpertiseContainer>
      <MainSecondBackground src={`${HtmlImage}`} alt="" />
    </MainSecondWrapper>
  );
}

export default MainSecond;
