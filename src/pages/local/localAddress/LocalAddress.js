import React, { useState } from "react";
import Wrapper from "../../../components/common/wrapper/Wrapper";
import * as S from "./LocalAddress.style";
import DaumPostcode from "react-daum-postcode";
import headerImage from "../../../assets/images/여행객/Vector.svg";
import searchImage from "../../../assets/images/여행객/Union.svg";
import { useNavigate } from "react-router";

const LocalAddress = () => {
  const [modalState, setModalState] = useState(false);
  const [inputAddressValue, setInputAddressValue] = useState("");
  const navigate = useNavigate();
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
      <S.headerButton>
        <S.headerImg src={headerImage}></S.headerImg>
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
          navigate("./items");
        }}
      >
        다음으로
      </S.nextButton>
    </Wrapper>
  );
};

export default LocalAddress;
