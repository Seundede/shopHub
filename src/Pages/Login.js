import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import image from "../Images/login.jpg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${image});
  object-fit: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
  @media only screen and (max-width: 480px) {
    width: 75%;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  margin-bottom: 10px;
`;
const Link = styled.a`
  cursor: pointer;
  font-size: 12px;
  margin: 5px 0px;
  text-decoration: underline;
`;
const Login = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>SIGN IN </Title>
          <Form>
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <Button>LOGIN</Button>
            <Link>Forgetten your password</Link>
            <Link>Create a new account</Link>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
