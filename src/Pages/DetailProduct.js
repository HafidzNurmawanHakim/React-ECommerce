import React from "react";
import styled from "styled-components";
import { Footer, Navbar } from "../Components";
import { ArrowLeft, ArrowRight, StarIcon } from "../Components/AllSvg";
import shirt from "../assets/shirt.jpg";

const Container = styled.div`
  padding: 80px 5vw 5vw 5vw;
  width: 100%;
  background: #e6cca9;
  img {
    width: 100%;
  }
  button:hover {
    cursor: pointer;
  }

  @media (max-width: 400px) {
    & {
      padding: 100px 5vw 5vw 5vw;
    }
  }
`;
const ButtonBack = styled.span`
  display: flex;
  padding: 3px 10px 3px 25px;
  width: 10vw;
  height: 4vw;
  min-width: 100px;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: 0.3s;

  .back {
    width: 25px;
    height: 25px;
    left: 0;
    position: absolute;
    transition: 0.3s;
  }
  .label {
    cursor: pointer;
    font-family: "M PLUS 1 Code", sans-serif;
  }

  &:hover {
    transform: scale(1.05);
  }
  &:hover .back {
    left: -20px;
  }
`;
const Product = styled.div`
  width: 90vw;
  margin: 10px auto;
  padding: 10px;
  background: #bbb;

  display: flex;
  justify-content: space-around;

  @media (max-width: 640px) {
    & {
      margin: 10px 5px;
    }
  }
  @media (max-width: 520px) {
    & {
      flex-direction: column;
    }
  }
`;
const Image = styled.div`
  width: 45vw;
  height: 100vh;
  display: flex;

  @media (max-width: 600px) {
    & {
      flex-direction: column-reverse;
      height: auto;
      justify-content: flex-end;
    }
  }
  @media (max-width: 520px) {
    & {
      width: 100%;
      justify-content: flex-start;
      flex-direction: row;
    }
  }
`;
const MiniImage = styled.div`
  width: 10vw;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: 70vh;

  img {
    width: 90%;
    margin: auto;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 3px;
  }

  img:hover {
    border: 2px solid black;
  }
  @media (max-width: 600px) {
    & {
      height: 20vh;
      width: 100%;
      flex-direction: row;
    }
    img {
      width: 30%;
    }
  }
  @media (max-width: 520px) {
    & {
      height: 70vh;
      width: 20vw;
      flex-direction: column;
    }
    img {
      width: 90%;
    }
  }
`;
const ImagePreview = styled.div`
  width: 40vw;
  height: auto;

  img {
    width: 90%;
    display: block;
    margin: 10px auto;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 3px;
  }
  @media (max-width: 520px) {
    & {
      width: 60vw;
    }
  }
  @media (max-width: 360px) {
    & {
      width: 70vw;
      height: 70vh;
    }
  }
`;
const Detail = styled.div`
  width: 50vw;
  height: 100vh;
  padding: 10px;

  header {
    position: relative;
  }
  @media (max-width: 520px) {
    & {
      width: 100%;
    }
  }
`;
const Price = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 10vw;
  height: 4vw;
  font-family: "M PLUS 1 Code", sans-serif;
  line-height: 4vw;
  font-size: calc(0.5vw + 1em);
  font-weight: bold;

  @media (max-width: 640px) {
    min-width: 100px;
  }
`;
const Content = styled.div`
  .rate {
    display: flex;
    align-items: center;
    width: 25vw;
    min-width: 150px;
    height: 30px;
    justify-content: space-between;
  }
`;
const Icon = styled.div`
  svg {
    width: 2.5vw;
    min-width: 15px;
    fill: white;
    margin-right: 2px;
  }
`;
const Title = styled.div`
  width: 100%;
  height: 4vw;
  padding: 0px 10px;
  line-height: 4vw;

  display: flex;
  justify-content: space-between;

  svg {
    height: 2.5vw;
    width: 2.5vw;
    margin: auto 5px;
  }
`;

const Text = styled.p`
  margin: 8px auto auto;
  font-size: calc(0.6vw + 0.6em);
`;
const Description = styled.div`
  height: auto;
  margin: 10px auto;

  p {
    overflow-wrap: break-word;
    width: 50vh;
  }
  @media (max-width: 520px) {
    p {
      width: 100%;
    }
  }
`;
const Variant = styled.div`
  background: salmon;
  cursor: pointer;
  height: 4vw;
  overflow: hidden;
  border-radius: 4px;
  transition: 0.3s;
  min-height: 30px;
  svg {
    width: 3vw;
    height: 3vw;
    min-width: 30px;
  }

  &:hover {
    color: white;
    fill: white;
  }
  select {
    width: 15vw;
    margin: 10px;
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

  .option {
    width: 4vw;
    height: 20px;
  }
  @media (max-width: 640px) {
    & {
      padding-top: 5px;
    }
  }
  @media (max-width: 400px) {
    & {
      padding-top: 7px;
    }
  }
`;

const Accept = styled.div`
  margin: 10px;
  display: flex;
  padding: 5px;
  justify-content: space-between;
  height: auto;
  button {
    width: 12vw;
    height: 4vw;
    background: white;

    :nth-child(2) {
      width: 5vw;
      margin-left: 10px;
    }
  }
  @media (max-width: 800px) {
    & {
      flex-direction: column;
    }
  }
`;
const ButtonAccept = styled.div`
  button {
    font-size: calc(0.6vw + 0.5em);
  }
  @media (max-width: 800px) {
    button {
      width: 20vw;
      text-align: center;
      font-size: calc(0.6vw + 0.5em);
    }
    button:last-child {
      width: 10vw;
    }
  }
  @media (max-width: 520px) {
    button {
      padding: 1px;
      min-height: 25px;
    }
  }
`;

const Input = styled.div`
  width: 10vw;
  height: 4vw;
  min-height: 25px;
  border-radius: 5px;
  background: white;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    height: 100%;
    border: none;
    font-weight: bold;
    color: green;
    background: transparent;
    transition: 0.2s;
    font-size: calc(0.5vw + 0.5em);
  }
  button:hover {
    background: crimson;
    color: white;
  }

  .stok {
    width: 10vw;
    position: absolute;
    min-width: 70px;
    left: 105%;
    font-size: calc(0.5vw + 0.6em);
  }
  @media (max-width: 800px) {
    & {
      width: 20vw;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 520px) {
    & {
      width: 40vw;
      margin-bottom: 10px;
    }
    button {
      max-width: 30px;
    }
  }
`;

const Bar = styled.ul`
  background: salmon;
  width: 100%;
  height: 4vw;
  min-height: 30px;
  border-bottom: 2px solid #bbb;
  font-size: calc(0.7vw + 0.5em);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;

  @media (max-width: 520px) {
    font-size: calc(0.7vw + 0.6em);
  }
`;
const Link = styled.li`
  list-style: none;
  display: block;
  width: auto;
  padding: 3px 10px;
  margin-right: 10px;
  cursor: pointer;
  position: relative;

  ::after {
    content: "";
    background: white;
    height: 2px;
    width: 0%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    transition: 0.3s;
  }

  &:hover:after {
    width: 100%;
  }
`;

const DetailProduct = () => {
  return (
    <>
      <Navbar />
      <Container>
        <ButtonBack>
          <ArrowLeft className="back" />
          <label className="label">Kembali</label>
        </ButtonBack>
        <Product>
          <Image>
            <MiniImage>
              <img className="mini-img" src={shirt} alt="shirt" />
              <img src={shirt} alt="shirt" />
              <img src={shirt} alt="shirt" />
            </MiniImage>
            <ImagePreview>
              <img src={shirt} alt="shirt" />
            </ImagePreview>
          </Image>
          <Detail>
            <header>
              <h1>Title</h1>
              <p>kategori</p>
              <Price>Rp566.969</Price>
            </header>
            <Content>
              <span className="rate">
                <Icon>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </Icon>
                <Text>4.7/5</Text>
              </span>
              <Description>
                <p>loremijodisvosidvmssssssssssssnjdsoifjwoiemirevpoeirngoiermvoierm</p>
              </Description>
              <Variant>
                <Title>
                  <p>Variant</p>
                  <ArrowRight />
                </Title>
                <select required onChange={""} value={""}>
                  <option defaultValue hidden>
                    Size
                  </option>
                  <option value="male">S</option>
                  <option value="female">L</option>
                  <option value="apparel">XL</option>
                  <option value="accessories">XXL</option>
                </select>
                <select required onChange={""} value={""}>
                  <option defaultValue hidden>
                    Warna
                  </option>
                  <option className="option" value="male">
                    Hitam
                  </option>
                  <option className="option" value="female">
                    Putih
                  </option>
                  <option className="option" value="apparel">
                    Merah
                  </option>
                  <option className="option" value="accessories">
                    Abu-abu
                  </option>
                </select>
              </Variant>
              <Accept>
                <Input>
                  <button>-</button>
                  <label>0</label>
                  <button>+</button>
                  <span className="stok">Stok 478</span>
                </Input>
                <ButtonAccept>
                  <button className="btn">+ Keranjang</button>
                  <button className="btn">Beli</button>
                </ButtonAccept>
              </Accept>
            </Content>

            <Bar>
              <Link>Detail</Link>
              <Link>Penting</Link>
              <Link>Ulasan</Link>
            </Bar>
          </Detail>
        </Product>
      </Container>
      <Footer />
    </>
  );
};

export default DetailProduct;
