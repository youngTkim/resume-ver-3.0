import styled from "styled-components";
import emaliJS from "@emailjs/browser";
import { useEffect, useState } from "react";

import { ShadowAnimationContainer } from "../../features/ShadowAnimationContainer";

const TitleContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Title = styled.span`
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 6rem;
  font-weight: 700;
`;

const MainFifthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  width: 40%;
  height: 60vh;
  background-color: #490c86;
  transition: 0.5s ease;
  box-shadow: 0px 0px 0px transparent;
`;

const ContactInner = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 3rem 1.5rem 3rem;
`;

const Introduction = styled.span`
  display: flex;
  justify-content: center;
  color: white;
  width: 100%;
  font-family: "Roboto Mono", sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const InputTag = styled.span`
  color: white;
  font-family: "Roboto Mono", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 0.3rem;
`;
const InputTextarea = styled.textarea`
  display: flex;
  color: white;
  height: 1.2rem;
  border-radius: 0.3rem;
  font-family: "Roboto Mono", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  background-color: #241d41;
  justify-content: center;
  width: 100%;
  resize: none;
  white-space: nowrap;
  overflow-y: hidden;
  margin-bottom: 0.5rem;
`;

const ButtonContainer = styled.span`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: "Roboto Mono", sans-serif;
  font-weight: 500;
  font-size: 1rem;

  span {
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    border: 0.1rem solid white;
    border-radius: 0.3rem;
    width: 5rem;
    height: 2.2rem;
    color: white;
    transition: 0.3s ease;
  }
  span:hover {
    color: #740cdc;
    background-color: white;
  }
`;

function MainFifth() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let replaced = value.replace(/\n/g, " ");
    setInputs({ ...inputs, [name]: replaced });
  };

  const SubmitMessage = () => {
    let params = {
      name: inputs.name,
      email: inputs.email,
      message: inputs.message,
    };
    emaliJS
      .send("service_c77v0es", "template_l749kh9", params)
      .then((res) => {
        setInputs({ name: "", email: "", message: "" });
        alert("성공적으로 메일이 발신되었습니다!");
      })
      .catch((err) => {
        console.log(err);
        alert("서버 에러로 메일을 발신하지 못하였습니다!");
      });
  };
  useEffect(() => {
    emaliJS.init("dtwv9gNMgaZvtwdSk");
  }, []);

  return (
    <>
      <TitleContainer id="contact">
        <Title>Contact</Title>
      </TitleContainer>
      <MainFifthWrapper>
        <ShadowAnimationContainer>
          <ContactContainer className="shadow">
            <ContactInner>
              <Introduction>Write your information for contact!</Introduction>
              <InputContainer>
                <InputTag>Name</InputTag>
                <InputTextarea
                  maxLength={20}
                  name="name"
                  onChange={onChange}
                  value={inputs.name}
                />
                <InputTag>E-mail</InputTag>
                <InputTextarea
                  maxLength={30}
                  name="email"
                  onChange={onChange}
                  value={inputs.email}
                />
                <InputTag>Message</InputTag>
                <InputTextarea
                  style={{ height: "5.3rem" }}
                  maxLength={220}
                  name="message"
                  onChange={onChange}
                  value={inputs.message}
                />
              </InputContainer>
              <ButtonContainer>
                <span onClick={SubmitMessage}>Submit</span>
              </ButtonContainer>
            </ContactInner>
          </ContactContainer>
        </ShadowAnimationContainer>
      </MainFifthWrapper>
    </>
  );
}

export default MainFifth;
