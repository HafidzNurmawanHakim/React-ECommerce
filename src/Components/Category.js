import React from "react";
import styled from "styled-components";
import { DiscountTag, PaymentIcon, QuickTime, ShippingIcon } from "./AllSvg";

const Container = styled.div`
  .wrap {
    padding: 5vw;
    display: flex;
    justify-content: space-around;
  }
`;

const Box = styled.div`
  background-color: white;
  margin: 10px;
  padding: 10px 5px;
  text-align: center;
  height: 20vw;
  width: 20vw;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  p {
    margin: auto;
    font-size: calc(1vw + 0.3rem);
  }

  & > :nth-child(1) {
    margin: auto;
    width: 5vw;
    fill: coral;
  }

  @media (max-width: 400px) {
    & {
      margin: 5px;
      padding: 6px 3px;
    }
    p {
      margin: auto;
      font-size: calc(0.7vw + 0.3rem);
    }
  }
  @media (max-width: 520px) {
    p {
      margin: auto;
      font-size: calc(0.6vw + 0.3rem);
    }
  }
`;
const Category = () => {
  return (
    <Container>
      <div className="wrap">
        <Box>
          <span>
            <DiscountTag />
          </span>
          <p>Dapatkan Diskon di Tiap Transaksi </p>
        </Box>
        <Box>
          <span>
            <ShippingIcon />
          </span>
          <p>Gratis Ongkir Ke Seluruh Indonesia</p>
        </Box>
        <Box>
          <span>
            <QuickTime />
          </span>
          <p>Proses Cepat, dan Tepat Waktu</p>
        </Box>
        <Box>
          <span>
            <PaymentIcon />
          </span>
          <p>Sistem Pembayaran yang Aman dan Terpercaya</p>
        </Box>
      </div>
    </Container>
  );
};

export default Category;
