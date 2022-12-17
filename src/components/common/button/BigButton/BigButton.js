import React from "react";
import * as S from "./BigButton.style";

const BigButton = ({ children, size, handleButton }) => {
  return (
    <S.BigButton size={size} onClick={handleButton}>
      {children}
    </S.BigButton>
  );
};

export default BigButton;
