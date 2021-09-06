import React from "react";
import styled from "styled-components";
import user1 from "../assets/img/user.jpg";

const Container = styled.div`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  /* flex-direction: row; */
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 5px 10px;
  }
`;

const NavKanan = styled.div`
  /* background-color: green; */
  display: flex;
  flex-direction: row;
`;

const Celsi = styled.div`
  width: 35px;
  height: 35px;
  background-color: black;
  color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

const Faren = styled.div`
  width: 35px;
  height: 35px;
  background-color: white;
  color: black;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

const User = styled.div`
  width: 50px;
  height: 50px;
  background-color: indigo;
  border-radius: 50px;
  background-image: url(${user1});
  /* background-size: 50px 50px; */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Navbar = ({ open }) => {
  return (
    <>
      <Container>
        <Ul open={open}>
          <li>Today</li>
          <li>Week</li>
        </Ul>
        <NavKanan>
          <Celsi>&#8451;</Celsi>
          <Faren>&#8457;</Faren>
          <User></User>
        </NavKanan>
      </Container>
    </>
  );
};

export default Navbar;
