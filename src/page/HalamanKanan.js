import React from "react";
import styled from "styled-components";
import Navbar from "../component/Navbar";
import Week from "../component/Week";

const BgKanan = styled.div`
  background-color: #f7f6f9;
  width: 70%;
  min-height: 650px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
  background-color: beige;
`;

const HalamanKanan = () => {
  return (
    <>
      <BgKanan>
        <Navbar />
        <Week />
      </BgKanan>
    </>
  );
};

export default HalamanKanan;
