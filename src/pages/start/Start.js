import React, { useState } from "react";
import Wrapper from "../../components/common/wrapper/Wrapper";
import BigButton from "./../../components/common/button/BigButton/BigButton";
import * as S from "./Start.style";

const Start = () => {
  const [inputState, setInputState] = useState({ name: "", url: "" });
  const handleInputName = (e) => {
    setInputState({
      ...inputState,
      name: e.target.name,
    });
  };
  const handleButton = () => {};

  const handleInputUrl = (e) => {
    setInputState({
      ...inputState,
      name: e.target.url,
    });
  };
  return (
    <Wrapper>
      <S.MainImage />
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
      <BigButton handleButton={handleButton}>특별한 만남 시작하기</BigButton>
    </Wrapper>
  );
};

export default Start;
