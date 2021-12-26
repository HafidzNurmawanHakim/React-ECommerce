import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Facebook, Github, Instagram, Twitter } from "./AllSvg";

const Container = styled.div`
  background-color: crimson;
  padding: 20px 20px 2px 20px;
  color: white;
  width: 100%;

  .develop {
    display: inline;
    font-size: calc(0.5vw + 0.5em);
  }
`;
const Box = styled.div`
  padding: 10px 20px;

  @media (max-width: 520px) {
    & {
      padding: 5px 0px;
    }
  }
`;
const Logo = styled.span`
  text-align: center;

  h1 {
    font-family: "M PLUS 1 Code", sans-serif;
    font-size: 5vw;
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;

  .subs {
    background: whitesmoke;
    padding: 10px;
    border-radius: 4px;
  }
  @media (max-width: 500px) {
    & {
      flex-wrap: wrap;
    }
  }
`;
const Column = styled.ul`
  h3 {
    font-family: "Poppins", sans-serif;
  }
  h4 {
    color: black;
    font-size: calc(0.6vw + 0.6em);
  }
  .title {
    font-size: calc(0.6vw + 0.8em);
    margin-bottom: 10px;
  }
  width: 25vw;
  height: 25vw;
  @media (max-width: 640px) {
    & {
      width: 24vw;
      height: auto;
    }
  }
  @media (max-width: 500px) {
    &:not(:last-child) {
      width: 40vw;
    }

    &:last-child {
      width: 50vw;
    }
  }
`;
const Link = styled(NavLink)`
  height: 25px;
  display: flex;
  text-decoration: none;
  position: relative;
  margin-bottom: 5px;
  right: 30px;
  color: white;
  transition: 0.3s;
  font-size: calc(0.5vw + 0.5em);
  line-height: 25px;
  & > :first-child {
    margin-right: 10px;
    width: 4vw;
    max-width: 30px;
  }

  &:hover {
    color: black;
    fill: white;
  }
`;

const Input = styled.div`
  input {
    padding-left: 5px;
    width: 100%;
    border: none;
    background: white;
    box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    font-size: calc(0.5vw + 0.6em);
  }
  button {
    border: none;
    margin-top: 10px;
    width: 100%;
    border-radius: 15px;
    background: crimson;
    border: 1px solid crimson;
    font-size: calc(0.5vw + 0.6em);
  }
  button:hover {
    background: white;
  }
`;
const Footer = () => {
  return (
    <Container>
      <Box>
        <Logo>
          <h1>HAZE</h1>
        </Logo>
        <Row>
          <Column>
            <h3 className="title">Haze Store</h3>
            <Link to="">Tentang Kami</Link>
            <Link to="">Bantuan</Link>
            <Link to="">Akun</Link>
            <Link to="">Metode Pembayaran</Link>
          </Column>
          <Column>
            <h3 className="title">Ikuti Kami</h3>
            <Link to="">
              <Github className="github" />
              <p className="text">Github</p>
            </Link>
            <Link to="">
              <Facebook className="fb" />
              <p className="text">Facebook</p>
            </Link>
            <Link to="">
              <Instagram className="ig" />
              <p className="text">Instagram</p>
            </Link>
            <Link to="">
              <Twitter className="twitter" />
              <p className="text">Twitter</p>
            </Link>
          </Column>
          <Column className="subs">
            <h4>Subscribe dan Dapatkan Update Menarik</h4>
            <Input>
              <input type="text" placeholder="Masukkan Email Anda" />
              <button>Kirim</button>
            </Input>
          </Column>
        </Row>
      </Box>

      <p className="develop">Develop By Hafidz Nurmawan Hakim</p>
    </Container>
  );
};

export default Footer;
