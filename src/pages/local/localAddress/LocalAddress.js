import React, { useState } from "react";
import Wrapper from "../../../components/common/wrapper/Wrapper";
import * as S from "./LocalAddress.style";
import * as G from "../../../components/common/header/header.style"
import DaumPostcode from "react-daum-postcode";
import searchImage from "../../../assets/images/여행객/Union.svg";
import { useNavigate } from "react-router";
import SetLatLong from "../../../components/SetLatLong";
import image from "../../../assets/images/localAddress.svg";
import axios from "axios";
import BigButton from "../../../components/common/button/BigButton/BigButton";

const LocalAddress = () => {
  const [modalState, setModalState] = useState(false);
  const [inputAddressValue, setInputAddressValue] = useState("");
  const navigate = useNavigate();

  const [Lat, setLat] = useState(""); // 경도
  const [Long, setLong] = useState(""); // 위도

  const [isGet, setGet] = useState(false);
  const postCodeStyle = {
    position: "absolute",
    width: "35rem",
    height: "24rem",
    top: "43rem",
    left: "2rem",
    display: modalState ? "block" : "none",
  }; // 스타일 정의 code
  const onCompletePost = (data) => {
    setModalState(false);
    setInputAddressValue(data.address);
    setGet(true);
  }; // onCompletePost 함수

  
  const handleNextButton = async () => {
    const newArray = [{"latitude":parseFloat(Long), "longitude":parseFloat(Lat)}];
    
    await axios({
      method: "post",
      url: process.env.REACT_APP_BACKEND_URL+"/api/address",
      contentType: "application/json",
      headers: { authorization: localStorage.getItem("accesstoken") },
      data: {
        address: newArray,
      },
    });
    navigate("/items");
  };

  return (
    <Wrapper>
      <G.HeaderBox>
        <G.Title>
          <G.firstLine>{localStorage.getItem("username")}님,</G.firstLine>
          <G.secondLine>
            여정을 위한 <G.Color>두번째</G.Color> 단계예요.
          </G.secondLine>
        </G.Title>
        <G.thirdLine>해당하는 곳을 선택해주세요.</G.thirdLine>
      </G.HeaderBox>

      <S.Image src={image} />

      <S.searchBox onClick={() => { setModalState(true); }}>
        <S.ddot></S.ddot>
        <S.roadText>
          {isGet ? inputAddressValue : "도로명주소 검색하기"}
        </S.roadText>
        <S.searchButton>
          <S.glassImg src={searchImage} />
        </S.searchButton>
      </S.searchBox>

      <DaumPostcode
        style={postCodeStyle}
        onComplete={onCompletePost}
      ></DaumPostcode>

      {isGet ? (
        <SetLatLong
          RoadAddr={inputAddressValue}
          Lat={Lat}
          Long={Long}
          setLat={setLat}
          setLong={setLong}
        ></SetLatLong>
      ) : (
        <></>
      )}
      <BigButton size="long" handleButton={handleNextButton}>
        다음으로
      </BigButton>
    </Wrapper>
  );
};

export default LocalAddress;