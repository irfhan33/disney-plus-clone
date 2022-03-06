import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";

function Home() {
  return (
    <div>
      <Container>
        <ImgSlider />
      </Container>
    </div>
  );
}

export default Home;

const Container = styled.main`
  height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url("images/home-background.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }
`;
