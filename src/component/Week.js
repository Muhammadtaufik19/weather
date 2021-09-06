import React, { useState } from "react";
import styled from "styled-components";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "./ChangingProgressProvider";

import sun from "../assets/icon/sun.png";
import cloudy from "../assets/icon/cloudy.png";
import rain from "../assets/icon/rain.png";
import snow from "../assets/icon/snow.png";
import maps from "../assets/icon/maps.png";
import up from "../assets/icon/up.png";
import down from "../assets/icon/down.png";
import sad from "../assets/icon/sad.svg";

import Data from "../Data.json";
import UvIndex from "./UvIndex";

const Container = styled.div`
  /* padding: 20px 30px; */
  padding-left: 80px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 15px;
  /* display: flex;
  flex-wrap: wrap; */
  /* background-color: antiquewhite; */
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 9%;
  border-radius: 15px;
  padding: 1px 20px;
  margin-right: 5px;
  background-color: white;
  img {
    width: 60%;
  }
`;

const Detail = styled.div`
  display: flex;
  flex-direction: row;
`;

const Paragraf = styled.p`
  margin-right: 5px;
  color: ${(props) => (props.black ? "black" : "gray")};
`;

const CardContainerDua = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 15px;
  flex-wrap: wrap;
  /* background-color: antiquewhite; */
`;

const CardDua = styled.div`
  width: 20%;

  border-radius: 15px;
  background-color: white;
  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 10px 50px;
  margin-right: 5px;
  margin-top: 20px;
  margin-bottom: 10px;
  height: 250px;
`;

const WindAngka = styled.div`
  font-size: 50px;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  margin-top: 70px;
  p {
    font-size: 20px;
  }
`;

const WindWsw = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  img {
    width: 30px;
    height: 30px;
  }
`;

const Sun = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;

  img {
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }
`;

const SunTime = styled.div``;

const SunPragraf = styled.div`
  color: ${(props) => (props.black ? "black" : "gray")};
`;

const Humadity = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: tomato; */
`;

const HumadityParagraf = styled.p`
  font-size: 50px;
  /* background-color: violet; */
`;

const HumadityPersen = styled.div`
  margin-top: 60px;
  font-size: 20px;
  /* background-color: thistle; */
`;

const HumadityIcon = styled.div`
  margin-top: -20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    margin-right: 10px;
  }
  img {
    width: 20px;
    height: 20px;
  }
`;

const Visial = styled.div`
  margin-left: 5px;
  margin-top: 85px;
`;
// ----------------------------------------------------------------------------------
const Week = () => {
  const [hari, setHari] = useState(Data);
  const arr = [
    {
      hari: "Senin",
    },
    {
      hari: "Selasa",
    },
  ];
  console.log(hari);
  const percentage = 7;
  return (
    <>
      <Container>
        <CardContainer>
          {hari.map((item) => {
            return (
              <Card>
                <Paragraf black>{item.hari}</Paragraf>
                <img src={item.Img} alt="" />
                <Detail>
                  <Paragraf black>{item.suhua} &deg;</Paragraf>
                  <Paragraf>{item.suhu2} &deg;</Paragraf>
                </Detail>
              </Card>
            );
          })}
        </CardContainer>
        <h3>Today's Highlights</h3>
        {/* <CardDua>
          <Paragraf>UV Index</Paragraf>
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </CardDua> */}
        {/* <UvIndex></UvIndex> */}
        <CardContainerDua>
          <CardDua>
            <Paragraf>UV Index</Paragraf>
            <UvIndex />
          </CardDua>
          <CardDua>
            <Paragraf>Wind Status</Paragraf>
            <WindAngka>
              7.70 <p>km/h</p>
            </WindAngka>
            <WindWsw>
              <img src={maps} alt="" />
              <p>WSW</p>
            </WindWsw>
          </CardDua>
          <CardDua>
            <Paragraf>Sunrise & Sunsite</Paragraf>
            <Sun>
              <img src={up} alt="" />
              <SunTime>
                <SunPragraf black>6:35 PM</SunPragraf>
                <SunPragraf>-1m 46s</SunPragraf>
              </SunTime>
            </Sun>
            <Sun>
              <img src={down} alt="" />
              <SunTime>
                <SunPragraf black>5:42 PM</SunPragraf>
                <SunPragraf>+2m 22s</SunPragraf>
              </SunTime>
            </Sun>
          </CardDua>
          <CardDua>
            <Paragraf>Humidity</Paragraf>
            <Humadity>
              <HumadityParagraf>12</HumadityParagraf>
              <HumadityPersen>%</HumadityPersen>
              <span
                class="fa-rotate-90"
                style={{ fontSize: 50, color: "Dodgerblue" }}
              >
                <i class="fa fa-toggle-on fa-flip-vertical"></i>
              </span>
            </Humadity>
            <HumadityIcon>
              <p>Normal</p>
              <i class="fa fa-thumbs-up"></i>
            </HumadityIcon>
          </CardDua>
          <CardDua>
            <Paragraf>Visibility</Paragraf>
            <Humadity>
              <HumadityParagraf>5.2</HumadityParagraf>
              <Visial>km</Visial>
            </Humadity>
            <HumadityIcon>
              <p>Average</p>
              <img src={sad} alt="" />
            </HumadityIcon>
          </CardDua>
          <CardDua>
            <Paragraf>Air Quality</Paragraf>
            <Humadity>
              <HumadityParagraf>105</HumadityParagraf>
              <span
                class="fa-rotate-90"
                style={{ fontSize: 50, color: "Dodgerblue" }}
              >
                <i class="fa fa-toggle-on fa-flip-horizontal"></i>
              </span>
            </Humadity>
            <HumadityIcon>
              <p>Unhealthy</p>
              <i class="fa fa-thumbs-down"></i>
            </HumadityIcon>
          </CardDua>
        </CardContainerDua>
      </Container>
    </>
  );
};

export default Week;
