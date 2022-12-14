import React from "react";
import * as S from "./BigButton.style";
import Wrapper from "../../wrapper/Wrapper";

const BigButton = ({ children, size, handleButton }) => {
  return (
    <S.BigButton size={size} onClick={handleButton}>
      {children}
    </S.BigButton>
  );
};

export default BigButton;
