import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Banner, Category, Footer, GiftSection, Jumbotron, Navbar, Product } from "../Components";
import { useDispatch, useSelector } from "react-redux";

const MainWrap = styled.div`
  background-color: whitesmoke;
`;
const Main = () => {
  const stateGlobal = useSelector((state) => state);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((res) => {
  //       const responseAPI = res.data;
  //       dispatch({ type: "UPDATE_DATA_PRODUCT", payload: responseAPI });
  //     })
  //     .catch((err) => console.log(err));
  // }, [dispatch]);
  console.log(stateGlobal.product);
  return (
    <MainWrap>
      <Navbar cart={stateGlobal.cart} />
      <Jumbotron />
      <Category />
      <Banner />
      <GiftSection />
      <Product data={stateGlobal.product} />
      <Footer />
    </MainWrap>
  );
};

export default Main;
