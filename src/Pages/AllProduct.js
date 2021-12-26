import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Footer, Navbar } from "../Components";
import { Gear, HeartIcon, StarIcon } from "../Components/AllSvg";
import shirt from "../assets/shirt.jpg";
import { useNavigate } from "react-router";

const Container = styled.div`
  background: #e6cca9;
  width: 100%;
  padding: 80px;
  overflow: hidden;

  @media (max-width: 400px) {
    & {
      padding-top: 90px;
      padding-left: 5px;
    }
  }
  @media (max-width: 580px) {
    padding: 90px 20px;
  }
`;
const SubContainer = styled.div`
  padding: 20px;
  min-width: 345px;
  margin: 0 auto;
  width: 100%;
  transition: 0.3s;
  transform: translateX(${(props) => (props.filterOn ? "130px" : 0)});
  @media (max-width: 400px) {
    & {
      padding: 3px;
    }
  }
  @media (max-width: 580px) {
  }
`;

const Filter = styled.div`
  position: fixed;
  left: ${(props) => (props.filterOn ? 0 : "-205px")};
  display: block;
  width: 20vw;
  min-width: 150px;
  height: 100vh;
  padding: 5px 10px;
  border-radius: 3px;
  background: #bbb;
  border-radius: 4px;
  transition: 0.3s;
  z-index: 9;

  span {
    display: inline-block;
    padding: 5px;
    border-radius: 3px;
    background: red;
    position: absolute;
    right: ${(props) => (props.filterOn ? "5px" : "-40px")};
    cursor: pointer;
    transition: 0.3s;

    & > * {
      width: 3vw;
      min-width: 20px;
    }
  }
  span:hover {
    fill: white;
  }
  .title {
    margin: 10px;
    font-family: "Montserrat", sans-serif;
  }
  select {
    border: 1px solid transparent;
    background: white;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;

    option {
      background: white;
    }
  }
  select:focus,
  select:hover {
    outline: none;
    border: 1px solid #333;
  }
  button {
    background: red;
    border: 1px solid transparent;
    border-radius: 20px;
    padding: 2px 15px;
    transition: 0.2s;
  }
  button:hover {
    border: 1px solid red;
    background: white;
  }

  @media (max-width: 760px) {
    & {
      left: ${(props) => (props.filterOn ? 0 : "-150px")};
    }
    span {
      right: ${(props) => (props.filterOn ? "5px" : "-35px")};
    }
  }
  @media (max-width: 400px) {
    & {
      left: ${(props) => (props.filterOn ? 0 : "-155px")};
    }
    span {
      right: ${(props) => (props.filterOn ? "5px" : "-35px")};
    }
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px;
  justify-content: space-between;
`;

const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  @media (min-width: 900px) {
    & {
      width: 20vw;
      height: 35vw;
    }
    .img-product {
      width: 90%;
      height: 21vw;
      display: block;
      margin: 5px auto;
    }
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
      width: 26vw;
      height: 45vw;
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
  @media (min-width: 900px) {
    .star,
    .star {
      width: 2.5vw;
      max-height: 40px;
    }
    .title,
    .price {
      width: 95%;
      max-height: 45px;
      font-size: calc(0.5vw + 0.7em);
    }
    button {
      border-radius: 15px;
      padding: 2px 25px;
      left: 30%;
    }
    ${Card}:hover & {
      button {
        bottom: 5%;
        opacity: 1;
      }
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
      height: 38%;
    }
    .title {
      margin-bottom: 2px;
      max-height: 25px;
    }
  }
`;
const Product = () => {
  let navigate = useNavigate();
  const [filterOn, setFilterOn] = useState(false);
  return (
    <>
      <Navbar />
      <Container>
        <h1>Semua Produk</h1>
        <Filter filterOn={filterOn}>
          <span onClick={() => setFilterOn(!filterOn)}>
            <Gear />
          </span>
          <h4 className="title">Filter</h4>
          <Box>
            <select required onChange={""} value={""}>
              <option defaultValue hidden>
                Kategori
              </option>
              <option value="male">Pria</option>
              <option value="female">Wanita</option>
              <option value="apparel">Baju</option>
              <option value="accessories">Aksesoris</option>
              <option value="electronics">Elektronik</option>
            </select>
          </Box>
          <Box>
            <select required onChange={""} value={""}>
              <option defaultValue hidden>
                Lokasi
              </option>
              <option value="male">Jakarta</option>
              <option value="female">Wakanda</option>
              <option value="apparel">Bekasi</option>
              <option value="accessories">Depok</option>
              <option value="electronics">Bogor</option>
            </select>
          </Box>
          <button>Terapkan</button>
        </Filter>
        <SubContainer filterOn={filterOn}>
          <CardWrap>
            <Card onClick={() => navigate(":productId")}>
              <img src={shirt} className="img-product" alt="product" />

              <Caption>
                <p className="title">Title</p>
                <p className="price">Rp.9687</p>
                <div className="icon">
                  <StarIcon className="star" />
                  <HeartIcon className="heart" />
                </div>
                <button>Add</button>
              </Caption>
            </Card>
            <Card>
              <img src={shirt} className="img-product" alt="product" />

              <Caption>
                <p className="title">Title</p>
                <p className="price">Rp.9687</p>
                <div className="icon">
                  <StarIcon className="star" />
                  <HeartIcon className="heart" />
                </div>
                <button>Add</button>
              </Caption>
            </Card>
            <Card>
              <img src={shirt} className="img-product" alt="product" />

              <Caption>
                <p className="title">Title</p>
                <p className="price">Rp.9687</p>
                <div className="icon">
                  <StarIcon className="star" />
                  <HeartIcon className="heart" />
                </div>
                <button>Add</button>
              </Caption>
            </Card>
            <Card>
              <img src={shirt} className="img-product" alt="product" />

              <Caption>
                <p className="title">Title</p>
                <p className="price">Rp.9687</p>
                <div className="icon">
                  <StarIcon className="star" />
                  <HeartIcon className="heart" />
                </div>
                <button>Add</button>
              </Caption>
            </Card>
            <Card>
              <img src={shirt} className="img-product" alt="product" />

              <Caption>
                <p className="title">Title</p>
                <p className="price">Rp.9687</p>
                <div className="icon">
                  <StarIcon className="star" />
                  <HeartIcon className="heart" />
                </div>
                <button>Add</button>
              </Caption>
            </Card>
            <Card>
              <img src={shirt} className="img-product" alt="product" />

              <Caption>
                <p className="title">Title</p>
                <p className="price">Rp.9687</p>
                <div className="icon">
                  <StarIcon className="star" />
                  <HeartIcon className="heart" />
                </div>
                <button>Add</button>
              </Caption>
            </Card>
            <Card>
              <img src={shirt} className="img-product" alt="product" />

              <Caption>
                <p className="title">Title</p>
                <p className="price">Rp.9687</p>
                <div className="icon">
                  <StarIcon className="star" />
                  <HeartIcon className="heart" />
                </div>
                <button>Add</button>
              </Caption>
            </Card>
            <Card>
              <img src={shirt} className="img-product" alt="product" />

              <Caption>
                <p className="title">Title</p>
                <p className="price">Rp.9687</p>
                <div className="icon">
                  <StarIcon className="star" />
                  <HeartIcon className="heart" />
                </div>
                <button>Add</button>
              </Caption>
            </Card>
          </CardWrap>
        </SubContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Product;
