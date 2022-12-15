import React, { useState } from "react";
import { useRecoilState } from "recoil";
import Wrapper from "../../components/common/wrapper/Wrapper";
import BigButton from "./../../components/common/button/BigButton/BigButton";
import * as S from "./Start.style";
import { userState } from "./../../atom/userState";
import { useNavigate } from "react-router";
import mainLogo from "../../assets/mainLogo.svg";

const Start = () => {
  const [inputState, setInputState] = useState({ name: "", url: "" });
  const navigate = useNavigate();
  const handleInputName = (e) => {
    setInputState({
      ...inputState,
      name: e.target.value,
    });
  };
  const [text, setText] = useRecoilState(userState);
  const handleButton = () => {
    setText({ name: inputState.name, url: inputState.url });
    localStorage.setItem("username", inputState.name);
    navigate("select");
  };

  const handleInputUrl = (e) => {
    setInputState({
      ...inputState,
      url: e.target.value,
    });
  };
  return (
    <>
      <Wrapper>
        <S.MainImage src={mainLogo} />
        <S.MainTitle>멘도롱주멍</S.MainTitle>
        <S.InputBox>
          <S.Input
            placeholder="닉네임을 입력해주세요"
            onChange={handleInputName}
          />
          <S.Input
            placeholder="카카오톡 오픈채팅방 URL을 입력해주세요"
            onChange={handleInputUrl}
          />
        </S.InputBox>
      </Wrapper>
      <S.ButtonBox>
        <BigButton size="long" handleButton={handleButton}>
          특별한 만남 시작하기
        </BigButton>
      </S.ButtonBox>
    </>
  );
};

export default Start;
