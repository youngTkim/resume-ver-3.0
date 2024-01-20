import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20vh;
  background-color: #490c86;
`;

const FooterInner = styled.div`
  color: white;
  letter-spacing: -0.05em;
  font-family: "Roboto Mono", sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterInner>Copyright© 2023. 김영택. All rights reserved.</FooterInner>
    </FooterWrapper>
  );
}

export default Footer;
