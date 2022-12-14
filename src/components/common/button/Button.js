import React from "react";
import * as S from "./Button.style";
import Wrapper from "./../wrapper/Wrapper";

const Button = ({ children, width, height }) => {
  return (
    <S.Button width={width} height={height}>
      {children}
    </S.Button>
  );
};

export default Button;
