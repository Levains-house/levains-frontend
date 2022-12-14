import React from "react";
import * as S from "./BigButton.style";
import Wrapper from "../../wrapper/Wrapper";

const BigButton = ({ children, size }) => {
  return <S.BigButton size={size}>{children}</S.BigButton>;
};

export default BigButton;
