import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 30px;
  width: 200px;
  height: 100px;
  /* border: 1px solid red; */
  position: relative;

  display: flex;
  justify-content: center;
  /* align-items: flex-end; */
  box-sizing: border-box;
  overflow: hidden;

  &:after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    width: 200px;
    height: 200px;
    left: 0;
    top: 0;
    border: 35px solid;
    border-color: grey grey yellow yellow;
    border-radius: 50%;
    transform: rotate(60deg);
  }

  p {
    font-size: 40px;
    margin-top: 50px;
  }
`;

const UvIndex = () => {
  return (
    <>
      <Container>
        <p>6</p>
      </Container>
    </>
  );
};

export default UvIndex;
