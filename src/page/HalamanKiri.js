import React from "react";
import styled from "styled-components";
import loupe from "../assets/icon/loupe.png";
import cloudy from "../assets/icon/cloudy.png";
import cloud from "../assets/icon/cloud.png";
import rain from "../assets/icon/rain.png";
import img1 from "../assets/img/img1.jpg";

const BgKiri = styled.div`
  background-color: white;
  width: 30%;
  min-height: 650px;
`;

const Container = styled.div`
  /* background-color: violet; */
  margin: 20px 20px;
`;

const Input = styled.input`
  width: 80%;
  height: 40px;
  /* background: #2b303b; */
  font-size: 10pt;
  /* float: left; */
  color: #63717f;
  border: 1px solid #4f5b66;
  border-radius: 10px;
  outline: none;
  padding-left: 25px;
`;

const Searc = styled.div`
  position: absolute;
  z-index: 2;
  margin-top: 10px;
  margin-left: 8px;
  color: gray;
`;

const ContainerSear = styled.div`
  /* background-color: aqua; */
  position: relative;
  display: flex;
  flex-direction: row;
`;

const SearchImg = styled.img`
  width: 20px;
  position: absolute;
  margin-left: 17px;
  margin-top: 17px;
  z-index: 1;
  color: #4f5b66;
  background-color: tomato;
`;

const ImgSatu = styled.img`
  margin-top: 30px;
  width: 50%;
`;

const Celcius = styled.p`
  font-size: 60px;
  display: flex;
  flex-direction: row;
  /* background-color: tomato; */
`;

const SpanCel = styled.span`
  margin-top: 10px;
  font-size: 30px;
`;

const Hari = styled.p`
  font-size: 20px;
  margin-top: -60px;
  /* background-color: thistle; */
`;

const SpanJam = styled.span`
  color: gray;
`;

const Mendung = styled.div`
  display: flex;
  flex-direction: row;
  img {
    width: 45px;
    margin-right: 10px;
  }
`;

const Rain = styled.div`
  display: flex;
  flex-direction: row;
  img {
    width: 45px;
    margin-right: 10px;
  }
`;

const ImageKota = styled.div`
  margin-top: 30px;
  background-image: url(${img1});
  background-size: 400px 150px;
  background-repeat: no-repeat;
  height: 150px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HalamanKiri = () => {
  return (
    <>
      <BgKiri>
        <Container>
          {/* <p>Halaman kiri</p> */}
          {/* <span>
            <SearchImg src={loupe} />
          </span> */}
          <ContainerSear>
            <Input
              type="text"
              placeholder="Cari lokasi"
              className="far fa-search"
            />
            <Searc>
              <i class="fa fa-search"></i>
            </Searc>
          </ContainerSear>
          <ImgSatu src={cloudy} />
          <Celcius>
            12 <SpanCel> &#8451;</SpanCel>
          </Celcius>
          <Hari>
            Monday, <SpanJam>14:00</SpanJam>
          </Hari>
          <hr />
          <Mendung>
            <img src={cloud} />
            <p>Mostly Cloudy</p>
          </Mendung>
          <Rain>
            <img src={rain} />
            <p>Rain - 30%</p>
          </Rain>
          <ImageKota>
            {" "}
            <h5>New York, USA</h5>{" "}
          </ImageKota>
        </Container>
      </BgKiri>
    </>
  );
};
