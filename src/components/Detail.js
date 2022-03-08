import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <BackgroundImage>
        <img
          draggable="false"
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg"
          alt=""
        />
      </BackgroundImage>
      <TitleImage>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"
          alt=""
          draggable="false"
        />
      </TitleImage>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2015 • 1h 35m • Coming of Age, Family, Animation</SubTitle>
      <Description>
        When 11-year-old Riley moves to a new city, her Emotions team up to help
        her through the transition. Joy, Fear, Anger, Disgust and Sadness work
        together, but when Joy and Sadness get lost, they must journey through
        unfamiliar places to get back home.
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  padding: 0 calc(3.5vw + 5px);
`;

const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TitleImage = styled.div`
  height: 65vh;
  width: 65vh;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const PlayButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 4px;
  padding: 0 24px;
  height: 56px;
  cursor: pointer;
  background: rgb (249, 249, 249);
  font-size: 15px;
  letter-spacing: 1.8px;
  margin-right: 22px;
  transition: all 250ms;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;
const AddButton = styled.button`
  min-width: 55px;
  height: 55px;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  border: 2px solid rgb(249, 249, 249);
  margin-right: 22px;
  cursor: pointer;
  transition: all 250ms;

  span {
    font-size: 40px;
    color: white;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const SubTitle = styled.span`
  font-size: 16px;
  color: #f9f9f9;
  min-height: 20px;
  font-weight: 400;
`;

const Description = styled.p`
  margin: 0;
  margin-top: 20px;
  font-size: 20px;
  color: #f9f9f9;
  max-width: 60vw;
  line-height: 1.4;
`;
