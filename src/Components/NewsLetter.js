import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 40vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  @media only screen and (max-width: 480px) {
    font-size: 40px;
  }
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  @media only screen and (max-width: 480px) {
    text-align: center;
  }
`;
const InputContainer = styled.div`
  border: 1px solid lightgray;
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    width: 80%;
  }
`;
const Input = styled.input`
  border: none;
  flex: 7;
  padding-left: 20px;
`;
const Button = styled.button`
  background-color: teal;
  border: none;
  color: white;
  flex: 1;
`;
const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Email address" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
