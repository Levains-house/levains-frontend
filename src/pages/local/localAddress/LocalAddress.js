import React, { useState } from "react";
import Wrapper from "../../../components/common/wrapper/Wrapper";
import * as S from "./LocalAddress.style";
import DaumPostcode from "react-daum-postcode";
import headerImage from "../../../assets/images/여행객/Vector.svg";
import searchImage from "../../../assets/images/여행객/Union.svg";
import { useNavigate } from "react-router";
import SetLatLong from "../../../components/SetLatLong";
import axios from "axios";

const LocalAddress = () => {
  const [modalState, setModalState] = useState(false);
  const [inputAddressValue, setInputAddressValue] = useState("");
  const navigate = useNavigate();

  const [Lat, setLat] = useState(""); // 경도
  const [Long, setLong] = useState(""); // 위도
  console.log(Lat, Long);

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

  const sendData = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiSldUIiwidXNlcl9pZCI6OCwidXNlcm5hbWUiOiJ0MTIzIiwia2FrYW9fdGFsa19jaGF0dGluZ191cmwiOiJ0ZXN0ZXN0Iiwicm9sZSI6IlRSQVZFTCIsImlhdCI6MTY3MTEwMjUwMCwiZXhwIjoxNjczNjk0NTAwLCJpc3MiOiJhZG1pbiJ9.-GspI417TwHFee5oEITknNgOHBPM9J5jTM2-1rwneXA",
    };
    try {
      const res = await axios.post(
        "http://levains-lb-2013408822.ap-northeast-2.elb.amazonaws.com/api/users/sign-in/address",
        {
          address: [
            {
              latitude: Long,
              longitude: Lat,
            },
          ],
        },
        {
          headers: headers,
        }
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Wrapper>
      <S.headerButton>
        <S.headerImg>&#60;</S.headerImg>
      </S.headerButton>
      <S.textHeader>
        혜연님,<br></br>만남을 위한 두번째 단계 입니다.
      </S.textHeader>
      <S.placeText>거주지를 입력해주세요.</S.placeText>
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
        ></S.glassImg>
      </S.searchButton>
      <DaumPostcode
        style={postCodeStyle}
        onComplete={onCompletePost}
      ></DaumPostcode>
      <S.nextButton
        onClick={() => {
          // console.log(Lat,Long);
          navigate("./items");
        }}
      >
        다음으로
      </S.nextButton>
    </Wrapper>
  );
};

export default LocalAddress;
