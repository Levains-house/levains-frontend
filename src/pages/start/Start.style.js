import styled from "styled-components";
import { BACKGROUND_PALETTE } from "./../../constants/palette";

const InputBox = styled.div`
  position: absolute;
  top: 30rem;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Input = styled.input`
  width: 35rem;
  height: 4.5rem;
  color: ${BACKGROUND_PALETTE.gray2};
  border-radius: 1rem;
  padding: 2rem;
  box-sizing: border-box;
  border: ${BACKGROUND_PALETTE.gray2} 1px solid;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 20px;
  display: flex;
  align-items: center;

  margin-top: 1rem;
`;

const MainImage = styled.img``;

const ButtonBox = styled.div`
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  cursor: pointer;
  display: flex;
  justify-content: center;
  top: 72rem;
`;

export { InputBox, Input, MainImage, ButtonBox };
