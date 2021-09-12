import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  @media only screen and (max-width: 480px) {
    height: 50px;
  }
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    padding: 10px 0px;
  }
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5;
  margin-left: 25px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  @media only screen and (max-width: 480px) {
    width: 50px;
  }
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  @media only screen and (max-width: 480px) {
    justify-content: center;
    flex: 2;
  }
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  @media only screen and (max-width: 480px) {
    font-size: 12px;
    margin-left: 10px;
  }
`;

const Navbar = () => {
  let history = useHistory();

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={() => history.push("/")}>shopHub.</Logo>
        </Center>
        <Right>
          <MenuItem onClick={() => history.push("/register")}>
            Register
          </MenuItem>

          <MenuItem onClick={() => history.push("/login")}>Sign in</MenuItem>
          <MenuItem>
            <Badge
              badgeContent={4}
              color="primary"
              onClick={() => history.push("/cart")}
            >
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
