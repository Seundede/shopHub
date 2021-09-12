import React from "react";
import styled from "styled-components";
import layer1 from "../Images/layer-1.jpg";
import layer2 from "../Images/layer-2.jpg";
import layer3 from "../Images/layer-3.jpg";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 0px;
  }
`;
const Wrapper = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media only screen and (max-width: 480px) {
    height: 30vh;
  }
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px;
  font-weight: 600;
  border: none;
  background-color: white;
  color: gray;
  cursor: pointer;
`;
const Layer = () => {
  let history = useHistory();
  return (
    <Container>
      <Wrapper>
        <Image src={layer1} />
        <Info>
          <Title>LEATHER CLOTHINGS</Title>
          <Button onClick={() => history.push("/product")}>SHOP NOW</Button>
        </Info>
      </Wrapper>
      <Wrapper>
        <Image src={layer2} />
        <Info>
          <Title>SNEAKERS</Title>
          <Button onClick={() => history.push("/product")}>SHOP NOW</Button>
        </Info>
      </Wrapper>
      <Wrapper>
        <Image src={layer3} />
        <Info>
          <Title>SWEATERS</Title>
          <Button onClick={() => history.push("/product")}>SHOP NOW</Button>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default Layer;
