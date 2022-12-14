import React, { useState } from "react";
import { useRecoilState } from "recoil";
import Wrapper from "../../components/common/wrapper/Wrapper";
import BigButton from "./../../components/common/button/BigButton/BigButton";
import * as S from "./Start.style";
import { userState } from "./../../atom/userState";
import { useNavigate } from "react-router";

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
    // axios({
    //   method: "post",
    //   url: "/api/users/sign-in",
    //   data: {},
    // });
    setText({ name: inputState.name, url: inputState.url });
    navigate("select");
  };

  const handleInputUrl = (e) => {
    setInputState({
      ...inputState,
      url: e.target.value,
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
      <S.ButtonBox>
        <BigButton size="long" handleButton={handleButton}>
          특별한 만남 시작하기
        </BigButton>
      </S.ButtonBox>
    </Wrapper>
  );
};

export default Start;
