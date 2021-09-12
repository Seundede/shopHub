import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
import image from "../Images/Product.jpg";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 10px;
  }
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  @media only screen and (max-width: 480px) {
    height: 40vh;
  }
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  @media only screen and (max-width: 480px) {
    padding: 10px;
  }
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Description = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 20px 0;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 5px;
  background-color: ${(props) => props.color};
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;

const PurchaseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid teal;
  border-radius: 10px;
  margin: 0 5px;
`;

const Button = styled.button`
  background-color: white;
  border: 2px solid teal;
  cursor: pointer;
  font-weight: 500;
  padding: 15px;
  &:hover {
    background-color: #f8f4f4;
  }
`;
const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src={image} />
        </ImageContainer>
        <InfoContainer>
          <Title>Complete Fit</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            facere expedita magnam itaque fuga corporis labore cupiditate eos in
            blanditiis neque optio minima repellat id est deserunt deleniti,
            voluptatum delectus.
          </Description>
          <Price>$35</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="gray" />
              <FilterColor color="lightblue" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <PurchaseContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </PurchaseContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
