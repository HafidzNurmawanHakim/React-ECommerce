import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import img1 from "../assets/banner2.png";
import img2 from "../assets/banner4.png";
import img3 from "../assets/womens.jpg";

const Container = styled.div`
  @media (max-width: 400px) {
    & {
      padding-top: 90px;
    }
  }
`;
const ImgWrap = styled.div`
  width: 100%;
  height: 75vh;
  overflow: hidden;
  background: chocolate;
  img {
    width: 100%;
  }

  @media (max-width: 360px) {
    & {
      height: 30vh;
      background: whitesmoke;
    }
    img {
      height: 35vh;
    }
  }
`;

const Caption = styled.div`
  position: absolute;
  top: 30%;
  left: 7%;
  width: 40vw;
  color: white;
  font-size: calc(2vw + 0.5em);

  p {
    font-size: calc(1vw + 0.5em);
    position: relative;
    bottom: 5px;
  }
  .title {
    font-size: calc(0.5vw + 1em);
  }

  @media (max-width: 640px) {
    & {
      top: 20%;
    }
  }
  @media (max-width: 400px) {
    & {
      top: 15%;
    }
  }
`;
const Button = styled.div`
  padding-left: 30px;
  font-size: calc(0.5vw + 0.7em);
  button {
    border: none;
    margin-right: 5px;
    border-radius: 15px;
    padding: 0.4rem 1rem;
    background-color: white;
    font-size: calc(0.5vw + 0.4em);
    transition: 0.3s;
  }

  & > :nth-child(1) {
    background-color: black;
    color: crimson;
  }
  & > :nth-child(1):hover {
    background-color: white;
    color: crimson;
  }
  & > :nth-child(2) {
    background-color: crimson;
    color: white;
  }
  & > :nth-child(2):hover {
    background-color: white;
    color: crimson;
  }
  @media (max-width: 400px) {
    & {
      position: relative;
      bottom: 20px;
    }
    button {
      padding: 0.2rem 0.6rem;
    }
  }
`;
const Jumbotron = () => {
  return (
    <Container>
      <Carousel className="carousel">
        <Carousel.Item interval={4000}>
          <ImgWrap>
            <img className="d-block w-100 " src={img1} alt="First slide" />
          </ImgWrap>
          <Caption>
            <h2 className="title">Buat Belajar Mu Lebih Seru Dengan Laptop Baru</h2>
            <p>Diskon 99% Maksimal 20jt</p>
            <Button>
              <button>Buy Now</button>
              <button>More </button>
            </Button>
          </Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <ImgWrap>
            <img className="d-block w-100 " src={img2} alt="First slide" />
          </ImgWrap>
          <Caption>
            <h2 className="title" style={{ color: "black" }}>
              Nikmati Gratis Ongkir Hingga 40rb
            </h2>
            <p style={{ color: "crimson" }}>Dalam Event Akhir Tahun</p>
            <Button>
              <button>Buy Now</button>
              <button>More </button>
            </Button>
          </Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <ImgWrap>
            <img className="d-block w-100 " src={img3} alt="First slide" />
          </ImgWrap>
          <Caption>
            <h2 className="title" style={{ color: "black" }}>
              Big Sale Akhir Tahun 2069 Kategori Fashion
            </h2>
            <p style={{ color: "crimson" }}>Diskon Up To 69%</p>
            <Button>
              <button>Buy Now</button>
              <button>More </button>
            </Button>
          </Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Jumbotron;
