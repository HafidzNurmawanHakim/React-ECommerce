import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { Cart, Category, SearchIcon } from "./AllSvg";

const Container = styled.div`
  background: transparent;
  position: fixed;
  width: 100%;
  height: 80px;
  z-index: 6;
  transition: 0.4s;
  @media (max-width: 400px) {
    & {
      padding-top: ${(props) => (props.offsetY > 80 ? "0" : "45px")};
      height: 90px;
      background: white;
    }
  }
`;
const Nav = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 400px) {
    & {
      background: #533535;
      border-top: 1px solid white;
    }
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  height: calc(3vh + 0.6vw);
  font-family: "Open Sans", sans-serif;

  & > *:first-child {
    fill: white;
    display: none;
  }

  @media (max-width: 570px) {
    & > *:first-child {
      display: block;
    }
    p {
      display: none;
    }
  }
`;
const BoxInput = styled.div`
  position: relative;

  input {
    position: relative;
    width: calc(30vw + 1rem);
    border: none;
    border-radius: 3px;
    padding-left: 5px;
  }

  & > :last-child {
    display: block;
    position: absolute;
    background-color: crimson;
    padding: 3px 5px;
    width: 30px;
    border-radius: 2px 3px 3px 2px;
    height: 24px;
    right: 2px;
    top: 1px;
    cursor: pointer;
    &:hover {
      fill: white;
    }
  }

  @media (max-width: 400px) {
    input {
      width: calc(35vw + 5vh);
      margin-left: 10px;
    }
  }
`;
const Menu = styled.div`
  width: calc(11vw + 5vh);
  height: 100%;
  align-items: center;
  position: relative;
  display: flex;
  justify-content: space-between;
  .submenu {
    position: absolute;
    padding: 10px;
    top: 100px;
    right: -50%;
    display: none;
    opacity: 0;
    width: 200px;
    background: white;
    border-radius: 4px;
    border: 1px solid crimson;
    transition: display 0.1s, opacity 0.4s ease 0.4s;
  }
  & > * {
    display: block;
    padding: 4px 5px;
    border-radius: 3px;
    color: white;
    transition: 0.2s;
    font-weight: bold;
    font-size: calc(0.5vw + 0.5em);
    &:hover {
      transform: translateY(5px);
      color: crimson;
      background-color: white;
    }

    &:hover .submenu {
      display: block;
      opacity: 1;
      top: 30px;
    }
  }

  .submenu > * {
    display: block;
  }

  @media (max-width: 570px) {
    & > * {
      fill: black;

      &:hover {
        fill: black;
        background-color: transparent;
      }
    }
    & {
      width: calc(3vw + 5vh);
      padding-bottom: 7px;
      padding-left: 10px;
    }
    .submenu {
      width: 150px;
    }
  }
`;

const Logo = styled.span`
  text-align: center;
  width: calc(10vw + 1em);
  font-family: "M PLUS 1 Code", sans-serif;
  cursor: pointer;
  line-height: 80px;
  transition: 0.3s;

  @media (max-width: 570px) {
    & {
      padding-top: 4px;
    }
  }
  @media (max-width: 400px) {
    & {
      top: 0;
      position: absolute;
      background-color: crimson;
      height: 40px;
      width: 100px;
      margin-top: 2px;
      padding: 0 10px;
      border-radius: 3px 3px 20px 3px;
      border: 2px solid crimson;
      transition: 0.2s;
    }

    &:hover {
      background-color: white;
      color: crimson;
    }
  }
`;

const Log = styled.div`
  position: relative;
  display: block;
  height: 100%;
  line-height: 40px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  & > :not(:first-child) {
    height: calc(1vw + 1.2rem);
    text-align: center;
    line-height: calc(1vw + 1.2rem);
    padding: 0 calc(1vw + 0.5em);
    margin-right: 5px;
    border-radius: 4px;
    display: block;
    cursor: pointer;
    font-size: calc(0.5vw + 0.5em);
    font-weight: bold;
    background-color: white;
    transition: 0.2s;

    &:hover {
      background-color: black;
      color: crimson;
    }
  }

  & > :first-child {
    margin-right: 20px;
    &:hover {
      fill: white;
      cursor: pointer;
    }
  }
  .counter {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    bottom: 1px;
    text-align: center;
    line-height: 20px;
    color: red;
  }
  .cart {
    position: relative;
    bottom: 5px;
  }

  @media (max-width: 400px) {
    .cart {
      position: relative;
      left: 5px;
    }
  }
`;

const stickyOn = {
  height: "45px",
  background: "#533535",
};
const Navbar = (props) => {
  const navigate = useNavigate();
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <Container style={offsetY > 80 ? stickyOn : null} offsetY={offsetY}>
      <Nav>
        <Logo style={{ display: `${offsetY > 80 ? "none" : "block"}` }} onClick={() => navigate("/")}>
          <h1>Haze</h1>
        </Logo>
        <BoxInput>
          <input type="text" />
          <SearchIcon width={18} height={18} />
        </BoxInput>
        <Menu>
          <Link to="">
            <Category className="logo" width={20} height={20} />
            <p>Kategori</p>
            <div className="submenu">
              <Link to="product">All Product</Link>
              <Link to="">Wanita</Link>
              <Link to="">Pria</Link>
              <Link to="">Elektronik</Link>
            </div>
          </Link>
          <Link to="">
            <p></p>
            <p>Populer</p>
          </Link>
        </Menu>
        <Log>
          <div className="cart">
            <Cart width={25} height={25} />
            <span className="counter">{props.cart}</span>
          </div>
          <Link to="">Masuk</Link>
          <Link to="">Daftar</Link>
        </Log>
      </Nav>
    </Container>
  );
};

export default Navbar;
