import React, { useState } from "react";
import Wrapper from "../../../components/common/wrapper/Wrapper";
import * as S from "./LocalAddress.style";
import DaumPostcode from "react-daum-postcode";
import searchImage from "../../../assets/images/여행객/Union.svg";
import { useNavigate } from "react-router";
import SetLatLong from "../../../components/SetLatLong";
import image from "../../../assets/images/localAddress.svg";

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

  return (
    <Wrapper>
      <S.textHeader>
        <S.a>{localStorage.getItem("username")}님,</S.a>
        <S.a>
          여정을 위한 <S.Color>두번째</S.Color> 단계에요
        </S.a>
      <S.placeText>해당하는 곳을 선택해주세요</S.placeText>
      </S.textHeader>

      <S.Image src={image} />

      <S.searchBox onClick={() => {
              setModalState(true);
            }}>
        <S.ddot></S.ddot>
        <S.roadText>
          {isGet ? inputAddressValue : "도로명주소 검색하기"}
        </S.roadText>
        <S.searchButton>
          <S.glassImg
            src={searchImage}
            
          />
        </S.searchButton>
      </S.searchBox>

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
      
      <DaumPostcode
        style={postCodeStyle}
        onComplete={onCompletePost}
      ></DaumPostcode>
      <S.nextButton
        onClick={() => {
          navigate("/items");
        }}
      >
        다음으로
      </S.nextButton>
    </Wrapper>
  );
};

export default LocalAddress;