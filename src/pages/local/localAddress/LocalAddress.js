import React, { useState } from "react";
import Wrapper from "../../../components/common/wrapper/Wrapper";
import * as S from "./LocalAddress.style";
import DaumPostcode from "react-daum-postcode";
import headerImage from "../../../assets/images/여행객/Vector.svg";
import searchImage from "../../../assets/images/여행객/Union.svg";
import { useNavigate } from "react-router";
import SetLatLong from "../../../components/SetLatLong";
import axios from "axios";
import image from "../../../assets/images/localAddress.svg";

const LocalAddress = () => {
  const [modalState, setModalState] = useState(false);
  const [inputAddressValue, setInputAddressValue] = useState("");
  const navigate = useNavigate();

  const [Lat, setLat] = useState(""); // 경도
  const [Long, setLong] = useState(""); // 위도

  const handleNextButton = async () => {
    const response = await axios({
      method: "post",
      url: "http://levains-lb-2013408822.ap-northeast-2.elb.amazonaws.com/api/users/sign-in/address",
      headers: {
        authorization: localStorage.getItem("accesstoken"),
      },
      data: {
        address: [
          {
            latitude: Long,
            longitude: Lat,
          },
        ],
      },
    });
    console.log(response);
    navigate("/items");
  };
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
        <S.a>혜연님,</S.a>

        <S.a>
          만남을 위한 <S.Color>두번째</S.Color> 단계 입니다.
        </S.a>
      </S.textHeader>
      <S.placeText>해당하는 곳을 선택해주세요</S.placeText>
      <S.Image src={image} />
      <S.searchBox></S.searchBox>
      <S.ddot></S.ddot>
      <S.roadText>
        {isGet ? inputAddressValue : "도로명주소 검색하기"}
      </S.roadText>
      {isGet ? (
        <SetLatLong
          RoadAddr={inputAddressValue}
          setLat={setLat}
          setLong={setLong}
        ></SetLatLong>
      ) : (
        <></>
      )}
      <S.searchButton>
        <S.glassImg
          src={searchImage}
          onClick={() => {
            setModalState(true);
          }}
        />
      </S.searchButton>
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
