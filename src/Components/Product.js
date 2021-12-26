import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { ArrowLeft, ArrowRight, HeartIcon, StarIcon } from "./AllSvg";
// import shirt from "../assets/shirt.jpg";

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;
const Box = styled.div`
  background-color: white;
  position: relative;
  margin: 10px;
  padding: 20px 30px;
  border-radius: 4px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);

  @media (max-width: 640px) {
    & {
      margin: 10px;
      padding: 10px 20px;
    }
  }
  @media (max-width: 520px) {
    & {
      margin: 5px;
      padding: 5px 10px;
    }
  }
`;

const SubBox = styled.div`
  width: auto;
  height: 30vw;
  .carousel {
    width: 100%;
    height: 100%;
  }
  .box {
    width: 100%;
    height: 100%;
  }

  .btn {
    border: none;
    position: absolute;
    top: 45%;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
  }

  .btn:hover > * {
    transition: 0.2s;
    fill: red;
  }

  .right {
    right: 0;
  }

  @media (max-width: 640px) {
    & {
      height: 40vw;
    }
    .slide-box {
      width: 30vw;
      height: 40vw;
    }
  }
  @media (max-width: 520px) {
    & {
      height: 44vw;
    }
  }
  @media (max-width: 400px) {
    & {
      height: 50vw;
    }
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 3px;
  margin: auto;
  width: 15vw;
  height: 27vw;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.1);

  .img-product {
    width: 80%;
    height: 16vw;
    display: block;
    margin: 5px auto;
  }
  @media (max-width: 640px) {
    & {
      margin-left: 10px;
      width: 20vw;
      height: 34vw;
    }
    .img-product {
      height: 20vw;
    }
  }
  @media (max-width: 520px) {
    & {
      width: 23vw;
      height: 39vw;
      margin-left: 10px;
    }
    .img-product {
      height: 22vw;
    }
  }
  @media (max-width: 400px) {
    & {
      width: 25vw;
      height: 44vw;
      margin-left: 10px;
    }

    .img-product {
      height: 25vw;
    }
  }
`;
const Caption = styled.div`
  position: relative;
  overflow: hidden;
  height: 34%;

  .title,
  .price {
    width: 95%;
    max-height: 35px;
    margin: auto;
    overflow-wrap: break-word;
    overflow: hidden;
    font-size: calc(0.5vw + 0.5em);
  }
  .price {
    color: salmon;
  }
  .icon {
    padding: 0 10px;
    position: absolute;
    bottom: 5px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
  .star {
    width: 2vw;
    min-width: 13px;
    fill: gold;
  }
  .heart {
    min-width: 13px;
    transition: 0.3s;
    fill: gray;
    width: 2vw;
  }
  .heart:hover {
    fill: red;
  }
  button {
    border: none;
    background: red;
    color: white;
    border: 1px solid red;
    transition: 0.4s;
    position: absolute;
    border-radius: 5px;
    left: 35%;
    bottom: -80%;
    opacity: 0;
  }
  button:hover {
    background: white;
    color: crimson;
  }

  ${Card}:hover & {
    button {
      bottom: 20%;
      opacity: 1;
    }
  }

  @media (max-width: 760px) {
    & {
      height: 37%;
    }
    .title {
      line-height: 1.2;
      max-height: 28px;
    }
    button {
      font-size: calc(0.5vw + 0.5em);
    }
  }
  @media (max-width: 640px) {
    .title {
      margin-bottom: 5px;
    }
  }
  @media (max-width: 520px) {
    .title {
      line-height: 1.3;
    }
  }
  @media (max-width: 400px) {
    & {
      height: 40%;
    }
    .title {
      margin-bottom: 2px;
      max-height: 25px;
    }
  }
`;

function useWindowsSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}

const Product = (props) => {
  const [width, height] = useWindowsSize();
  const [show, setShow] = useState(5);

  useEffect(() => {
    if (width < 480) {
      return setShow(3);
    }
    if (width < 640) {
      return setShow(4);
    }
    if (width > 761) {
      return setShow(5);
    }
  }, [width]);

  console.log(show);

  console.log("props>", props.data.length);
  return (
    <Container onChange={() => console.log(window.innerWidth)}>
      <Box>
        <h2>Product</h2>
        <SubBox>
          <CarouselProvider className="carousel" naturalSlideHeight={150} naturalSlideWidth={100} totalSlides={props.data.length} visibleSlides={show}>
            <Slider className="box">
              {props.data.map((item, i) => {
                return (
                  <Slide className="slide-box" index={i} key={item.id} category={item.category}>
                    <Card>
                      <img src={item.image} className="img-product" alt="product" />

                      <Caption>
                        <p className="title">{item.title}</p>
                        <p className="price">Rp{item.price}</p>
                        <div className="icon">
                          <StarIcon className="star" />
                          <HeartIcon className="heart" />
                        </div>
                        <button>Add</button>
                      </Caption>
                    </Card>
                  </Slide>
                );
              })}
            </Slider>
            <ButtonBack className="btn left">
              <ArrowLeft />
            </ButtonBack>
            <ButtonNext className="btn right">
              <ArrowRight />
            </ButtonNext>
          </CarouselProvider>
        </SubBox>
      </Box>
    </Container>
  );
};

export default Product;
