import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;
const Logo = styled.h1`
  letter-spacing: 2px;
`;
const Description = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  color: white;
  width: 40px;
  height: 40px;
  background-color: #${(props) => props.color};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 5px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>shopHub</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti sed
          ipsa maiores consectetur quibusdam vel amet nihil obcaecati impedit
          quidem!
        </Description>
        <SocialContainer>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="385999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms and Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          123-456-789
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          abcd@gmail.com
        </ContactItem>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
      </Right>
    </Container>
  );
};

export default Footer;
