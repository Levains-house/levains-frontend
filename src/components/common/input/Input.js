import React from "react";
import * as S from "./Input.style";

const Input = ({ placeholder, onChange }) => {
  return <S.Input placeholder="닉네임을 입력해주세요" onChange={onChange} />;
};

export default Input;
