import { useEffect, useState } from "react";
import styled from "styled-components";

const HeaderWrapperInner = styled.div`
  display: flex;
  padding: 2rem;
  width: 100%;
  height: 100%;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: -0.08em;
  color: white;
`;

const NavContainer = styled.nav`
  flex: 1;
  display: flex;
  color: white;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const NavItemsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const NavItems = styled.ul`
  display: flex;
  padding: 0rem 14rem 0rem 8rem;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  &:not(:hover) {
    color: white;
  }

  &:hover {
    .nav-item:hover {
      color: #ffffff;
      transform: scale(1.05);
    }
    .nav-item:not(:hover) {
      color: #444444;
    }
  }
  .nav-item {
    flex: 1;
    display: flex;
    transition: 0.5s ease;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
    letter-spacing: -0.03em;
  }

  .nav-item_title {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    width: 100%;
  }
  .nav-item_number {
    position: absolute;
    transform: translateY(-75%);
    font-size: 0.7rem;
    font-weight: 500;
    margin-bottom: -0.25rem;
  }
`;
const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 999;
  display: flex;
  width: 100%;
  height: 14vh;
  font-family: "Roboto Mono", sans-serif;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease;
  transform: translateY(-100%);
  background-color: white;
  backdrop-filter: blur(5px);
  &.frame-in {
    transform: translateY(0);
    background-color: transparent;
  }
`;

function Header() {
  let [headerFrameIn, setHeaderFrameIn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 100) {
        setHeaderFrameIn(true);
      } else {
        setHeaderFrameIn(false);
      }
    });
  }, []);

  return (
    <HeaderWrapper className={`${headerFrameIn ? "frame-in" : ""}`}>
      <HeaderWrapperInner>
        <Logo>
          <span style={{ color: "#6ec1e4" }}>YoungTeck</span>.
          <span style={{ color: "#b7f" }}>Kim</span>_
        </Logo>
        <NavContainer>
          <NavItemsContainer>
            <NavItems>
              <li className="nav-item">
                <span className="nav-item_title">
                  <span className="nav-item_number">{`01`}</span>
                  {`// home`}
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-item_title">
                  <span className="nav-item_number">{`02`}</span>
                  {`// expertise`}
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-item_title">
                  <span className="nav-item_number">{`03`}</span>
                  {`// work`}
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-item_title">
                  <span className="nav-item_number">{`04`}</span>
                  {`// experience`}
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-item_title">
                  <span className="nav-item_number">{`05`}</span>
                  {`// contact`}
                </span>
              </li>
            </NavItems>
          </NavItemsContainer>
        </NavContainer>
      </HeaderWrapperInner>
    </HeaderWrapper>
  );
}

export default Header;
