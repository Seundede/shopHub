import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import image1 from "../Images/image-2.jpg";
import dress from "../Images/dress.jpg";
import pink from "../Images/pink.jpg";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const Arrow = styled.div`
  background-color: lightgray;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  position: absolute;
  top: 0;
  bottom: 0;
  opacity: 0.7;
  margin: auto;
  z-index: 3;
  left: ${(props) => props.direction === "left" && "20px"};
  right: ${(props) => props.direction === "right" && "20px"};
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  height: 100vh;
  width: 100vw;
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 80%;
  width: 100%;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  padding-left: 20px;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  padding: 10px;
  font-size: 20px;
`;

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        <Slide bg="f5fafd">
          <ImageContainer>
            <Image src={image1} />
          </ImageContainer>
          <InfoContainer>
            <Title>Any variation that fits your imagination</Title>
            <Description>
              Find a perfect outfit that will suit your soul and body
            </Description>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="fcf1ed">
          <ImageContainer>
            <Image src={pink} />
          </ImageContainer>
          <InfoContainer>
            <Title>Dresses to be noticed.</Title>
            <Description>
              Fashion is a part of the daily air and it changes all the time,
              with all the events.
            </Description>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="fbfof4">
          <ImageContainer>
            <Image src={dress} />
          </ImageContainer>
          <InfoContainer>
            <Title>Basic colours comeback</Title>
            <Description>
              Less is more never out of date. Discover our collections and
              choose your style.
            </Description>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Hero;
