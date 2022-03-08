import React from "react";
import styled from "styled-components";
function Login() {
  return (
    <Container>
      <Content>
        <LogoOne src="images/cta-logo-one.svg" />
        <CTA>GET ALL THERE</CTA>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <LogoTwo src="images/cta-logo-two.png" />
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  padding: 0 calc(3.5vw + 5px);
  height: calc(100vh - 70px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("images/login-background.jpg");
    background-opacity: 0.8;
    z-index: -1;
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    // background-attachment: fixed;
  }
`;

const Content = styled.div`
  margin-top: -100px;
  max-width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const LogoOne = styled.img`
  width: 90%;
  object-fit: contain;
`;

const Description = styled.p`
  color: rgb(243, 243, 243);
  font-size: 11px;
  margin: 0px 0px 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;
const LogoTwo = styled.img`
  width: 90%;
  object-fit: contain;
`;

const CTA = styled.a`
  background-color: rgb(0, 99, 229);
  padding 20px 0;
  border-radius: 4px;
  font-weight: 900;
  letter-spacing: 1.5px;
  font-size: 18px;
  border: 1px solid transparent;
  cursor:pointer;
  transition: all 250ms;
  width: 100%;
  text-align:center;
  margin-bottom: 12px;

  &:hover{
    background-color: rgb(4, 131, 238);
  }
`;
