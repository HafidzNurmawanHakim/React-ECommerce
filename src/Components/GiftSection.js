import React from "react";
import styled from "styled-components";
import giftImg from "../assets/gift-removebg-preview.png";
import { HeartIcon, StarIcon } from "./AllSvg";
import jamTangan from "../assets/jam tangan1.jpg";
import shirt from "../assets/shirt.jpg";
import phone from "../assets/SN2-Oppo-A53.jpg";
import shoes from "../assets/shoes.jpg";
import tas from "../assets/tas.jpg";

const Container = styled.div`
  h1 {
    font-family: "Poppins", sans-serif;
    font-size: calc(0.8vw + 1em);
    font-weight: bold;
    margin-bottom: 20px;
  }
  img {
    width: 100%;
  }
`;
const Box = styled.div`
  background-color: white;
  margin: 10px;
  padding: 4vw 2vw;
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.1);
  .big-img {
    width: 60vw;
    margin: auto;
    display: block;
  }
`;
const SubBox = styled.div`
  display: flex;
  flex: row nowrap;

  @media (max-width: 760px) {
    & {
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;
const Card = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  width: 18vw;
  height: 25vw;
  cursor: pointer;
  transition: 0.3s;
  margin: 10px;
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.1);
  @media (max-width: 640px) {
    & {
      width: 23vw;
      height: 31vw;
    }
  }
  @media (max-width: 640px) {
    & {
      width: 25vw;
      height: 33vw;
    }
  }
  @media (max-width: 400px) {
    & {
      margin: 2px 3px;
      width: 26vw;
      height: 34vw;
    }
  }
`;
const Caption = styled.div`
  position: absolute;
  height: auto;
  padding: 10px;
  padding-bottom: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  left: 0;
  right: 0;
  bottom: 0;
  top: 85%;

  transition: 0.3s;

  .heart {
    position: absolute;
    top: 10px;
    right: 10px;
    fill: white;
    transition: 0.3s;
    width: 2vw;
  }

  .heart:hover {
    fill: red;
  }
  .title {
    font-size: calc(1vw + 0.5em);
    width: 75%;
    position: relative;
    bottom: 3px;
    max-height: 8vw;
    overflow: hidden;
  }
  .star {
    position: relative;
    bottom: 5px;

    & > * {
      width: 2vw;
    }
    & > :not(:last-child) {
      margin-right: 2px;
    }
  }

  ${Card}:hover & {
    top: 55%;
  }

  button {
    position: absolute;
    border: none;
    height: 3vw;
    width: 6vw;
    bottom: -20px;
    opacity: 0;
    right: 10px;
    text-align: center;
    background-color: crimson;
    border: 1px solid crimson;
    color: white;
    border-radius: 15px;
    font-size: calc(0.5vw + 0.5em);
    transition: 0.3s;

    ${Card}:hover & {
      bottom: 5px;
      opacity: 1;
    }

    &:hover {
      background-color: white;
      color: crimson;
    }
  }

  @media (max-width: 760px) {
    & {
      top: 82%;
    }
  }
  @media (max-width: 480px) {
    & {
      top: 77%;
      font-size: calc(0.5vw + 0.6em);
    }
    ${Card}:hover & {
      top: 50%;
    }
    button {
      right: 5px;
      height: 4vw;
      width: 8vw;
    }
    .star {
      bottom: -3px;
    }
    .heart {
      width: 3vw;
    }
  }
`;

const GiftSection = () => {
  return (
    <Container>
      <Box>
        <h1 style={{ textAlign: "center" }}>Give The Best Gift To a Loved One</h1>
        <img src={giftImg} className="big-img" alt="gift-img" />

        <SubBox>
          <Card>
            <img src={jamTangan} alt="img-card" />
            <Caption>
              <h5 className="title">Titledlvms;dlmv;sldmv;sldm</h5>
              <HeartIcon className="heart" />
              <span className="star">
                <StarIcon fill="yellow" />
                <StarIcon fill="yellow" />
                <StarIcon fill="yellow" />
                <StarIcon fill="yellow" />
                <StarIcon fill="yellow" />
              </span>
              <button>More</button>
            </Caption>
          </Card>
          <Card>
            <img src={shirt} alt="img-card" />
            <Caption>
              <h5 className="title">Title</h5>
              <HeartIcon className="heart" />
              <span className="star">
                <StarIcon fill="yellow" />
                <StarIcon fill="yellow" />
                <StarIcon fill="yellow" />
                <StarIcon fill="yellow" />
                <StarIcon fill="yellow" />
              </span>
              <button>More</button>
            </Caption>
          </Card>
          <Card>
            <img src={phone} alt="img-card" />
            <Caption>
              <h5 className="title">Title</h5>
              <HeartIcon className="heart" />
              <span className="star">
                <StarIcon fill="yellow" />
                <StarIcon fill="yellow" />
                <StarIcon fill="yellow" />
                <StarIcon fill="yellow" />
                <StarIcon fill="yellow" />
              </span>
              <button>More</button>
            </Caption>
          </Card>
          <Card>
            <img src={tas} alt="img-card" />
            <Caption>
              <h5 className="title">Title</h5>
              <HeartIcon className="heart" />
              <span className="star">
                <StarIcon fill="yellow" />
                <StarIcon fill="yellow" />
                <StarIcon fill="yellow" />
                <StarIcon fill="yellow" />
                <StarIcon fill="yellow" />
              </span>
              <button>More</button>
            </Caption>
          </Card>
          <Card>
            <img src={shoes} alt="img-card" />
            <Caption>
              <h5 className="title">Title</h5>
              <HeartIcon className="heart" />
              <span className="star">
                <StarIcon fill="yellow" />
                <StarIcon fill="yellow" />
                <StarIcon fill="yellow" />
                <StarIcon fill="yellow" />
                <StarIcon fill="yellow" />
              </span>
              <button>More</button>
            </Caption>
          </Card>
        </SubBox>
      </Box>
    </Container>
  );
};

export default GiftSection;
