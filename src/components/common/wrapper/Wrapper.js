import React from "react";
import * as S from "./Wrapper.style";

const Wrapper = ({ children }) => {
  return (
    <S.Wrapper>
      <S.WrapperInner>{children}</S.WrapperInner>
    </S.Wrapper>
  );
};

export default Wrapper;
