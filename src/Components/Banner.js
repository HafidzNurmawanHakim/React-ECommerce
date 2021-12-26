import React from "react";
import styled from "styled-components";
import womenFashion from "../assets/women-fashion.jpg";
import manFashion from "../assets/man-fashion.jpg";

const Container = styled.div`
  padding: 10px 20px;

  p {
    font-size: calc(0.5vw + 0.5em);
  }
  h1 {
    font-size: calc(0.8vw + 1em);
    margin-bottom: 10px;
  }

  @media (max-width: 360px) {
    p {
      font-size: calc(0.5vw + 0.4em);
    }
  }
`;
const Box = styled.div`
  background-color: white;
  padding: 10px 20px;
  display: flex;
  height: 60vh;
  margin-bottom: 20px;
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s;
  &:hover {
    box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 360px) {
    height: 40vh;
    padding: 5px 10px;
    margin-bottom: 10px;
  }
`;
const SubBox = styled.div`
  .woman-img {
    width: 90%;
    border-radius: 30% 70% 51% 49% / 30% 55% 45% 70%;
  }
  .man-img {
    width: 90%;
    border-radius: 71% 29% 25% 75% / 68% 55% 45% 32%;
  }

  button {
    border: none;
    margin-right: 5px;
    border-radius: 3px;
    padding: calc(0.8vw - 0.2em) calc(1.3vw - 0.2em);
    background-color: crimson;
    border: 1px solid crimson;
    color: white;
    font-size: calc(0.5vw + 0.4em);
    transition: 0.3s;

    &:hover {
      background-color: white;
      color: crimson;
    }
  }
`;
const Banner = () => {
  return (
    <Container>
      <Box>
        <SubBox>
          <img className="woman-img" src={womenFashion} alt="women-fashion" />
        </SubBox>
        <SubBox>
          <h1>Women's Fashion Enthusiast</h1>

          <p>Buying fashion should leave you happy and good-looking, with money in your pocket. Dress, Skirt, Shoes and contacts—we’ve got your Legs covered</p>
          <button>Shop Now</button>
        </SubBox>
      </Box>
      <Box>
        <SubBox>
          <h1>Best Man Fashion Of The Year</h1>
          <p>Be a a good-looking man by Buying best match fashion. Make your closest persons happy by looking you. Dress,Clother, Skirt, sunglasses, Shoes and contacts—we’ve got your Legs covered</p>
          <button>Shop Now</button>
        </SubBox>
        <SubBox>
          <img className="man-img" src={manFashion} alt="man-fashion" />
        </SubBox>
      </Box>
    </Container>
  );
};

export default Banner;
