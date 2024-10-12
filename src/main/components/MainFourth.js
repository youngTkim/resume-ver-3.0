import styled from "styled-components";
import { useState } from "react";

const TitleContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 10vh;
  margin-bottom: 4rem;
`;
const Title = styled.span`
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: -1.5rem;
`;

const MainFourthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 80vh;
  color: white;
  z-index: 2;
  margin-bottom: 12vh;
`;

const AccordionContainer = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 12vh 0 12vh;
`;

const AccordionItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const AccordionTitle = styled.div`
  border-radius: 0.3rem;
  display: flex;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  padding: 1rem 2rem 1rem 2rem;
  cursor: pointer;
  transition: 0.5s ease;
  background-color: ${(props) => (props.isOpen ? "#740cdc" : "#490c86")};
`;

const AccordionContentContainer = styled.div`
  position: relative;
  border-radius: 0.3rem;
  transition: 0.5s ease;
  margin-top: 0.5rem;
  margin-bottom: ${(props) => (props.isOpen ? "1rem" : "0")};
  min-height: ${(props) => (props.isOpen ? "30vh" : "0")};
  background-color: #241d41;
  box-shadow: ${(props) =>
    props.isOpen ? "10px 10px 0px #ff00b8" : "0px 0px 0px transparent"};
`;

const AccordionContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: space-between;
  width: 100%;
  transition: 0.5s ease;
  height: ${(props) => (props.isOpen ? "100%" : "0")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  font-family: "Roboto Mono", "Gowun Batang", sans-serif;
  font-weight: 600;
  letter-spacing: -0.022em;
  div {
    flex: 1;
    margin: 0.8rem;
  }
`;
const ContentExplanationContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  .label {
    display: flex;
    margin: 0.3rem 0.5rem 0.3rem 0rem;
    height: 1.6rem;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 0.8rem;
    font-weight: 500;
    font-family: "Roboto Mono", sans-serif;
    padding: 0.3rem 1rem 0.3rem 1rem;
    border-radius: 1rem;
    background-color: #2c3599;
  }
`;

function MainFourth() {
  const accordionData = [
    {
      title: "Codestates Frontend Bootcamp",
      date: "",
      // "2022.12 - 2023.07"
      content:
        "코드스테이츠 부트캠프를 통해 순수 html,css,js를 배웠고, react,styledcomponents,express를 통해 웹을 구축하는 방법을 배우고,프로젝트를 진행하게 되었습니다. css를 통한 웹 디자인과 인터렉션을, fetch와 promise를 통해 응답과 에러를 처리하는 방법을 cookie를 이용해 로그인 기능을 처리하는 기능을 사용하였습니다.",
      stacks: [
        "html",
        "css",
        "react",
        "express",
        "styled-components",
        "aws",
        "axios",
        "postman",
      ],
    },
    {
      title: "Codestates Team Project - stackoverflow copy",
      date: "",
      // "2023.04 - 2023.07"
      content:
        "Stackoverflow Copy 프로젝트를 맡았을 때는 검색과 메인 페이지의 질문,답변 CRUD를 만드는 역할을 하였는데, jwt 토큰을 이용한 방식으로 백엔드 api와 통신하였고, 검색에 대한 부분을 프론트에서 구현하도록 query를 이용하여 답변 개수, 유저명, 태그에 따라 그에 맞는 조건을 가진 질문을 일치하도록 정규표현식을 사용해 구현했습니다. cors에러때문에 토큰을 받지 못하였는데 Access-Control-Expose-Headers 설정하는 백엔드쪽 문제가 있다고 발견하여 해결하였었습니다.",
      stacks: ["react", "styled-components", "aws", "axios", "postman"],
    },
    {
      title: "Codestates Team Project - our payment",
      date: "",
      // "2023.04 - 2023.07"
      content:
        "근로기준법이 개정되면서 법적으로 반드시 근로자들에게 급여 명세서를 발급하게 되었으므로, 세금과 근태 기록을 모두 어플리케이션 안에서 확인해서 온라인으로 급여 명세서를 받아볼 수 있는 어플리케이션을 만들고자 하였습니다. 또한 관리자 입장에선 근로자 유저들의 목록을 관리해 근태를 체크하여 명세서에 반영될 수 있도록 만들고자 하였습니다. 국세청 api를 활용하여 사업자 등록증 진위 확인, 삽입정렬 알고리즘으로 시간 순서대로 계획정렬을 구현하였습니다.",
      stacks: [
        "nextjs",
        "tailwind.css",
        "styled-components",
        "axios",
        "typescript",
      ],
    },
    {
      title: "Personal Project - socketchat",
      date: "",
      // "2023.08 - Present"
      content:
        "socket을 이용한 실시간 채팅 웹앱을 만들어보면서 처음으로 직접 서버와 데이터베이스를 구성하면서 백엔드와 관련된 여러가지 개념을 바로 잡을 수 있었습니다. 쿠키에 관련되어서는 고민하게 되었는데, chrome 80버전부터는 samesite 속성을 none을 설정하기 위해서는 https 프로토콜을 사용하여야 되기 때문에, 같은 인스턴스에 pm2를 통해 다른 포트로 클라이언트, 서버, 소켓서버를 킨 상태로 도메인을 구매하여 Route53을 통해 등록, DNS 전파가 끝나면 도메인 작동여부를 확인, 프로젝트를 마무리하였습니다.",
      stacks: [
        "canvas",
        "socket",
        "react",
        "express",
        "styled-components",
        "nestjs",
        "route53",
        "mongodb",
      ],
    },
    {
      title: "Personal Project - resume",
      date: "",
      // "2023.08 - Present"
      content:
        "성공한 웹 사이트들의 디자인에 어떤 UI/UX들을 사용하는지  확인하기 위해 Apple 메인페이지를 Copy해서 만들어보고, 다른 웹 사이트들을 참고해서 Dingo 웹 사이트를 재해석해서 만들어서, 그 경험을 바탕으로 새로운 UI/UX를 가진 이력서 포트폴리오를 만들었습니다.",
      stacks: ["canvas", "react", "styled-components"],
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const handleAccordionToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <TitleContainer id="experience">
        <Title>History &</Title>
        <Title>Experience</Title>
      </TitleContainer>
      <MainFourthWrapper>
        <AccordionContainer>
          {accordionData.map((item, index) => (
            <AccordionItem
              key={index}
              onClick={() => handleAccordionToggle(index)}
            >
              <AccordionTitle isOpen={openIndex === index}>
                <span>{item.title}</span>
                <span>{item.date}</span>
              </AccordionTitle>
              <AccordionContentContainer isOpen={openIndex === index}>
                <AccordionContent isOpen={openIndex === index}>
                  <ContentExplanationContainer>
                    <span>{item.content}</span>
                  </ContentExplanationContainer>

                  <Stack>
                    {item.stacks.map((stack) => (
                      <span className="label">{stack}</span>
                    ))}
                  </Stack>
                </AccordionContent>
              </AccordionContentContainer>
            </AccordionItem>
          ))}
        </AccordionContainer>
      </MainFourthWrapper>
    </>
  );
}

export default MainFourth;
